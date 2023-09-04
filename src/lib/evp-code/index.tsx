import { Prism as Highlight } from 'react-syntax-highlighter';
import * as Theme from 'react-syntax-highlighter/dist/esm/styles/prism';// 代码高亮主题风格
import { Hintable } from '../utils';

export type LangOptions = 'javascript' | 'typescript' | 'java' | 'python' | 'c' | 'cpp' | 'csharp' | 'go' | 'ruby' | 'rust' | 'swift' | 'kotlin' | 'php' | 'html' | 'css' | 'scss' | 'less' | 'json' | 'xml' | 'yml' | 'yaml' | 'bash' | 'sh' | 'shell' | 'cmd' | 'bat' | 'console' | 'sql' | 'markdown' | 'text';

export type CodeTheme = 
'a11yDark'
| 'atomDark'
| 'base16AteliersulphurpoolLight'
| 'cb'
| 'coldarkCold'
| 'coldarkDark'
| 'coy'
| 'darcula'
| 'duotoneDark'
| 'duotoneEarth'
| 'duotoneForest'
| 'duotoneLight'
| 'duotoneSea'
| 'duotoneSpace'
| 'funky'
| 'ghcolors'
| 'gruvboxDark'
| 'gruvboxLight'
| 'holiTheme'
| 'hopscotch'
| 'lucario'
| 'materialDark'
| 'materialLight'
| 'materialOceanic'
| 'nightOwl'
| 'nord'
| 'okaidia'
| 'oneDark'
| 'oneLight'
| 'pojoaque'
| 'prism'
| 'shadesOfPurple'
| 'solarizedDarkAtom'
| 'solarizedlight'
| 'synthwave84'
| 'tomorrow'
| 'twilight'
| 'vs'
| 'vscDarkPlus'
| 'xonokai'
| 'zTouch'
;

export type CodeThemeOptions = Hintable<CodeTheme>;

export type EvpCodeProps = {
  children?: string, 
  lang?: Hintable<LangOptions>,
  theme?: CodeThemeOptions,
  show?: boolean,
}

export default function EvpCode(props: EvpCodeProps){
  // @ts-ignore
  const theme = Theme[props.theme??'vscDarkPlus'];
  const $show = props.show?? true;
  return(
    <>
      {$show?
        <Highlight
          language={props.lang??'text'}
          PreTag={'div'}
          style={theme}
          customStyle={{
            borderRadius: 6
          }}
          >
          {`${props.children?.replace('\n', '')}`}
        </Highlight>
        : void 0
      }
    </>
  )
}