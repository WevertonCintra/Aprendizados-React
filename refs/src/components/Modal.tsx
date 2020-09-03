import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';

export interface ModalHandles {
  OpenModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(true);

  const OpenModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      OpenModal,
    };
  });



  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div>
      Modal aberto

      <button onClick={handleCloseModal}>Fechar Modal</button>
    </div>
  );
}

export default forwardRef(Modal);