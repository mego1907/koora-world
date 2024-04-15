import { Modal } from '@/components'
import React from 'react'

const Filter = ({ openFilter, setOpenFilter }) => {

  const handleClose = () => {
    setOpenFilter(false);
  }

  return (
    <Modal open={openFilter} setOpen={setOpenFilter} onClose={handleClose} width='md:w-8/12'>
      <h3 className="text-2xl text-center">فلاتر البحث</h3>

      
    </Modal>
  )
}

export default Filter