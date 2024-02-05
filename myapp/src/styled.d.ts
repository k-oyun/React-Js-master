// import original module declarations
import 'styled-components';


// 테마가 추가될 부분
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}