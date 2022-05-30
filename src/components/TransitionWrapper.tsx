import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

// see url to explain why this component is necessary:
// https://stackoverflow.com/questions/62187461/using-react-finddomnode-is-deprecated-in-strictmode-is-thrown-as-a-warning-when

interface ITransitionWrapperProps {
  timeout: number;
  classNames: string;
  children?: React.ReactNode;
}
export default function TransitionWrapper({
  timeout,
  classNames,
  children,
  ...props
}: ITransitionWrapperProps) {
  const ref = useRef(null);
  return (
    <CSSTransition
      nodeRef={ref}
      timeout={timeout}
      classNames={classNames}
      {...props}
    >
      <div ref={ref}>{children}</div>
    </CSSTransition>
  );
}
