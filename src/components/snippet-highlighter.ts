import PrismLight from "react-syntax-highlighter/dist/esm/prism-light";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";

// The TSX grammar also registers its TypeScript and JSX dependencies.
PrismLight.registerLanguage("tsx", tsx);

export default PrismLight;
