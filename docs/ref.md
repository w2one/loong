# ref


## rc-form

[rc-form](https://github.com/react-component/form)

> wrappedComponentRef

~~~
// Recommended
const EnhancedForm = createForm()(Form);
<EnhancedForm wrappedComponentRef={(inst) => this.formRef = inst} />
this.formRef // => The instance of Form
~~~


## forwarding-refs

[forwarding-refs](https://reactjs.org/docs/forwarding-refs.html)

~~~
/**
 * dict context
 */
import React, { createContext } from "react";

export const DictContext = createContext({ value: {} });

export function withDict(Component) {
  const C = props => {
    const { forwardedRef, ...remainingProps } = props;
    return (
      <DictContext.Consumer>
        {context => (
          <Component {...remainingProps} {...context} ref={forwardedRef} />
        )}
      </DictContext.Consumer>
    );
  };

  C.displayName = Component.name;
  C.WrappedComponent = Component;

  return React.forwardRef((props, ref) => {
    return <C {...props} forwardedRef={ref} />;
  });
}

~~~


## 函数组件不能用ref

因为没有实例
