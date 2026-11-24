import { Fragment, useState } from "react";
import EvpInput from "../evp-input";
import { Color } from "../constant";
import Right from "../evp-icon/right";
import Left from "../evp-icon/left";
import { ArrayStrictLengthed, hexAlpha } from "../utils";
import { pageBounds, visiblePages } from "./pagination";

export interface EvpPaginatorProps
  extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onChange"> {
  class?: string;
  id?: string;
  children?: React.ReactNode;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  /**
   * @defaultValue [number] `5`
   * @description how many tabs to show
   */
  counters?: number;
  pageSize?: number;
  total: number;
  /**
   * @defaultValue [boolean] `true`
   * @description whether to show total count of items
   */
  showTotal?: boolean;
  /**
   * @defaultValue [boolean] `false`
   * @description whether to show quick jumper
   */
  showQuickJumper?: boolean;
  /**
   * @defaultValue [boolean] `false`
   * @description whether to show size changer
   */
  showSizeChanger?: boolean;
  /**
   * @defaultValue [boolean] `true`
   * @description whether to show taber
   */
  showTaber?: boolean;
  onChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
  onPageChange?: (current: number, pageSize: number) => void;
  quene?: ArrayStrictLengthed<"total" | "sizer" | "taber" | "jumper", 4>;
  /**
   * @defaultValue [string] `var(--tabColor) = Color.Black`
   * @description tab text color
   */
  tabColor?: string;
  /**
   * @defaultValue [string] `var(--tabBgColor) = Color.White`
   */
  tabBgColor?: string;
  /**
   * @defaultValue [string] `var(--tabActiveColor) = Color.White`
   * @description tab text color when active
   */
  tabActiveColor?: string;
  /**
   * @defaultValue [string] `var(--tabActiveBgColor) = Color.Blue`
   */
  tabActiveBgColor?: string;
  /**
   * @defaultValue [string] `var(--tabHoverColor) = var(--tabColor) = Color.Black`
   * @description tab text color when hover
   */
  tabHoverColor?: string;
  /**
   * @defaultValue [string] `var(--tabHoverBgColor) = var(--tabActiveBgColor) + "11" = Color.Blue11`
   */
  tabHoverBgColor?: string;
}

const EvpPaginator: React.FC<EvpPaginatorProps> = ({
  class: customClass, className, id, children, currentPage, setCurrentPage, counters,
  pageSize: requestedSize, total, showTotal = true, showQuickJumper, showSizeChanger, showTaber = true,
  onChange, onPageChange, onShowSizeChange, style, quene = ["total", "sizer", "taber", "jumper"],
  tabColor = Color.Black, tabBgColor = Color.White, tabActiveColor = Color.White, tabActiveBgColor = Color.Blue,
  tabHoverColor = tabColor, tabHoverBgColor = hexAlpha(tabActiveBgColor, 11), ...props
}) => {
  const [localPage, setLocalPage] = useState(1);
  const { page, pageSize, pageCount } = pageBounds(total, requestedSize, currentPage ?? localPage);

  function changePage(target: number) {
    if (!Number.isSafeInteger(target)) return;
    const next = Math.min(pageCount, Math.max(1, target));
    if (next === page) return;
    if (currentPage === undefined) setLocalPage(next);
    setCurrentPage?.(next);
    onPageChange?.(next, pageSize);
    onChange?.(next, pageSize);
  }

  const sections = {
    total: showTotal && <span>Total: {total}</span>,
    sizer: showSizeChanger && <span>PageSize: {pageSize}</span>,
    taber: showTaber && (
      <span className="evp-paginator-tabs">
        <button type="button" aria-label="Previous page" className="evp-counter-lefter" disabled={page === 1}
          onClick={() => changePage(page - 1)}><Left radius={20} /></button>
        {visiblePages(page, pageCount, counters).map((number) => (
          <button type="button" key={number} aria-current={number === page ? "page" : undefined}
            className={number === page ? "evp-paginator-tab-active" : "evp-paginator-tab"}
            onClick={() => changePage(number)}>{number}</button>
        ))}
        <button type="button" aria-label="Next page" className="evp-counter-righter" disabled={page === pageCount}
          onClick={() => changePage(page + 1)}><Right radius={20} /></button>
      </span>
    ),
    jumper: showQuickJumper && (
      <label className="evp-paginator-jumper">Jump to
        <EvpInput style={{ width: 50 }} onEnter={(event) => {
          const text = event.currentTarget.value.trim();
          if (text) changePage(Number(text));
        }} />
      </label>
    )
  };
  return (
    <div id={id} className={className ?? customClass} {...props} style={{
      display: "flex", width: "fit-content", justifyContent: "flex-end", alignItems: "center",
      flexWrap: "wrap", gap: 8, marginBlock: 8,
      "--tabColor": tabColor, "--tabBgColor": tabBgColor, "--tabActiveColor": tabActiveColor,
      "--tabActiveBgColor": tabActiveBgColor, "--tabHoverColor": tabHoverColor, "--tabHoverBgColor": tabHoverBgColor,
      ...style
    } as React.CSSProperties}>
      {quene.map((section) => <Fragment key={section}>{sections[section]}</Fragment>)}
      {children}
    </div>
  );
};

export default EvpPaginator;
