import { Modal } from '@/components'
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react'
import * as profileApi from "../../../APIs/2-Profile-Api"
import { useAppContext } from '@/contexts/AppContext';
import { clearLocalStorage } from '@/utils';
import { redirect } from 'next/navigation';

const DeleteAccount = ({ hideDeleteBtn }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const { userData, showToast, setUserData } = useAppContext();

  const { mutate: deleteAcc, isPending } = useMutation({
    mutationKey: "DeleteAccount",
    mutationFn: profileApi.deleteAccount,
    onSuccess: (data) => {
      if (data.success) {
        showToast({ type: "SUCCESS", message: data.message });
      } else {
        showToast({ type: "ERROR", message: data.message });
      }
    },
    onError: (err) => {
      showToast({ type: "ERROR", message: err.message });
    }
  })

  const deleteMyAccount = () => {
    deleteAcc(userData.token);
    clearLocalStorage();
    setUserData({});
    setOpenDeleteModal(false);
    redirect("/")
  }

  return (
    <div>
      <Modal
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      >
        <h2 className="text-sm text-center md:text-2xl">هل أنت متأكد من حذف الحساب؟</h2>

        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            type="button"
            className="p-2 px-6 text-white bg-green-600 rounded-full"
            onClick={deleteMyAccount}
          >
            حذف
          </button>
          <button
            type="button"
            className="p-2 px-6 text-white bg-red-600 rounded-full"
            onClick={() => setOpenDeleteModal(false)}
          >
            إلغاء
          </button>
        </div>
      </Modal>

      {!hideDeleteBtn && (
        <button
          type="button"
          className="p-2 px-6 text-white bg-red-600 rounded-full"
          onClick={() => setOpenDeleteModal(true)}
        >
          حذف الحساب
        </button>
      )}

    </div>
  )
}

export default DeleteAccount