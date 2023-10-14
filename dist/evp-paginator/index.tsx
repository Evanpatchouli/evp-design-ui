import EvpInput from "../evp-input";
import EvpDom from "../evp-dom";
import { Color } from "../constant";
import Right from "../evp-icon/right";
import classNames from "classnames";
import NumUtils from "../utils/num.util";
import Left from "../evp-icon/left";
import { useEffect, useState } from "react";
import { isInteger } from "lodash";
import { ArrayStrictLengthed, hexAlpha } from "../utils";

const Total = ({ showTotal, total }: { showTotal?: boolean; total?: number }) => (
  <EvpDom hidden={showTotal === false} mgr_8>
    Total: {total}
  </EvpDom>
);

const Sizer = ({ showSizeChanger, pageSize }: { showSizeChanger?: boolean; pageSize?: number }) => (
  <EvpDom hidden={!showSizeChanger} mgr_8>
    PageSize: {pageSize}
  </EvpDom>
);

const Taber = ({
  showTaber,
  total,
  pageSize,
  currentPage,
  setCurrentPage,
  counters,
  onPageChange,
  colors,
}: {
  showTaber?: boolean;
  total: number;
  pageSize?: number;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  counters?: number;
  onPageChange?: (current: number, pageSize: number) => void;
  colors?: {
    tabColor?: string;
    tabBgColor?: string;
    tabActiveColor?: string;
    tabActiveBgColor?: string;
    tabHoverColor?: string;
    tabHoverBgColor?: string;
  };
}) => {
  const pagesMax = total > 0 ? Math.ceil(total / (pageSize ?? 10)) : 1;

  useEffect(() => {
    const a = ((currentPage ?? 1) - 1) / (counters ?? 5);
    let start = Math.floor(a);
    if (a - start > 0 && isInteger(a)) {
      start = start + 1;
    }
    setCounterWindow([start * (counters ?? 5), (start + 1) * (counters ?? 5)]);
  }, [counters, currentPage]);

  const banLeft = () => {
    return (currentPage ?? 1) > 1 ? "" : "evp-disabled";
  };
  const banRight = () => {
    return (currentPage ?? 1) < pagesMax ? "" : "evp-disabled";
  };
  const [countersWindow, setCounterWindow] = useState([0, counters ?? 5]);
  return (
    <>
      {showTaber !== false ? (
        <div style={{ display: "flex", alignItems: "center", marginRight: 8 }}>
          <Left
            class={classNames("evp-counter-lefter", banLeft())}
            style={{
              pointerEvents: banLeft() ? "none" : void 0,
            }}
            radius={20}
            onClick={() => {
              if (currentPage !== undefined) {
                if (currentPage > 1) {
                  setCurrentPage?.((currentPage ?? 0) - 1);
                }
              }
            }}
            pointer
            mg={[0, 8, 0, 0]}
          />
          {NumUtils.range(1, pagesMax)
            .slice(countersWindow[0], countersWindow[1])
            .map((item) => (
              <EvpDom
                class={classNames(currentPage === item ? "evp-paginator-tab-active" : "evp-paginator-tab")}
                mgr_8
                w={30}
                h={30}
                style={{
                  textAlign: "center",
                  lineHeight: "30px",
                  borderRadius: 5,
                  // @ts-ignore
                  "--tabColor": colors?.tabColor ?? Color.Black,
                  "--tabBgColor": colors?.tabBgColor ?? Color.White,
                  "--tabActiveColor": colors?.tabActiveColor ?? Color.White,
                  "--tabActiveBgColor": colors?.tabActiveBgColor ?? Color.Blue,
                  "--tabHoverColor": colors?.tabHoverColor ?? colors?.tabColor ?? Color.Black,
                  "--tabHoverBgColor": colors?.tabHoverBgColor ?? hexAlpha(colors?.tabActiveBgColor ?? Color.Blue, 11),
                }}
                pointer
                $click={() => {
                  setCurrentPage?.(item);
                  onPageChange?.(item, pageSize ?? 10);
                }}
              >
                {item}
              </EvpDom>
            ))}

          <Right
            class={classNames("evp-counter-righter", banRight())}
            style={{
              pointerEvents: banRight() ? "none" : void 0,
            }}
            radius={20}
            onClick={() => {
              if (currentPage !== undefined) {
                if ((currentPage ?? 1) < pagesMax) {
                  setCurrentPage?.((currentPage ?? 0) + 1);
                }
              }
            }}
            pointer
          />
        </div>
      ) : (
        void 0
      )}
    </>
  );
};

const Jumper = ({
  showQuickJumper,
  setCurrentPage,
  onPageChange,
  pageSize,
}: {
  showQuickJumper?: boolean;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  onPageChange?: (current: number, pageSize: number) => void;
  pageSize?: number;
}) => (
  <>
    {showQuickJumper ? (
      <EvpDom mgr_8 display="flex" alignItems="center">
        <EvpDom mgr_8 style={{ whiteSpace: "nowrap" }}>
          Jump to
        </EvpDom>
        <EvpInput
          onEnter={(e) => {
            setCurrentPage?.(Number(e.currentTarget.value));
            onPageChange?.(Number(e.currentTarget.value), pageSize ?? 10);
          }}
          style={{ width: 50 }}
        />
      </EvpDom>
    ) : (
      void 0
    )}
  </>
);

// @ts-ignore
export interface EvpPaginatorProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
  class: className,
  id,
  children,
  currentPage,
  setCurrentPage,
  counters,
  pageSize,
  total,
  showTotal,
  showQuickJumper,
  showSizeChanger,
  onChange,
  onShowSizeChange,
  onPageChange,
  style,
  quene: _quene,
  tabColor,
  tabBgColor,
  tabActiveColor,
  tabActiveBgColor,
  tabHoverColor,
  tabHoverBgColor,
  ...props
}) => {
  const quene = _quene ?? ["total", "sizer", "taber", "jumper"];

  const Elem = {
    total: <Total showTotal={showTotal} total={total} />,
    sizer: <Sizer showSizeChanger={showSizeChanger} pageSize={pageSize} />,
    taber: (
      <Taber
        total={total}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        counters={counters}
        onPageChange={onPageChange}
        colors={{
          tabColor,
          tabBgColor,
          tabActiveColor,
          tabActiveBgColor,
          tabHoverColor,
          tabHoverBgColor,
        }}
      />
    ),
    jumper: (
      <Jumper
        showQuickJumper={showQuickJumper}
        setCurrentPage={setCurrentPage}
        onPageChange={onPageChange}
        pageSize={pageSize}
      />
    ),
  };

  return (
    <div
      style={{
        display: "flex",
        width: "fit-content",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBlock: "8px",
        ...style,
      }}
      {...props}
      className={props.className ?? className}
    >
      {Elem[quene[0]]}
      {Elem[quene[1]]}
      {Elem[quene[2]]}
      {Elem[quene[3]]}
    </div>
  );
};

export default EvpPaginator;
