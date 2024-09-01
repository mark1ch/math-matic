export function useModal() {
  const openModal = (func: (value: React.SetStateAction<boolean>) => void) => {
    func(true);
    document.body.classList.add("open-modal");
    document.body.style.overflow = "hidden";
  };

  const closeModal = (func: (value: React.SetStateAction<boolean>) => void) => {
    func(false);
    document.body.classList.remove("open-modal");
    document.body.style.removeProperty("overflow");
  };

  return {
    openModal,
    closeModal,
  };
}
