import React from "react";

interface ToastsContainerProps {
  toasts?: JSX.Element[]
}

const ToastsContainer: React.FC<ToastsContainerProps> = (props) => {
  React.useEffect(() => {
    console.log('conatiner\'s toasts', props.toasts);
  }, [props.toasts]);
  const toasts = props.toasts??[];
  return (
    <div className='evp evp-toasts-container'>
      {toasts.map((toast, index) => toast)}
    </div>
  )
}

export default ToastsContainer;