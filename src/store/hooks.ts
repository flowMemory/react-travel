import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState } from "./index";

// 把RootState以泛型的方式传递给TypedUseSelectorHook，这样可以避免直接把类型绑定到组件上面，从而深度耦合
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;