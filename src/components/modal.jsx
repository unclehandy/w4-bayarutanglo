import { Form } from "@/components/form";

export const Modal = () => {
  return (
    <dialog id="form-pop-up" className="modal">
      <div className="w-full p-4">
        <div className="text-center font-semibold text-xl">
          Mohon Lengkapi Form Berikut
        </div>

        <div className="modal-action w-full">
          <Form />
        </div>
      </div>
    </dialog>
  );
};
