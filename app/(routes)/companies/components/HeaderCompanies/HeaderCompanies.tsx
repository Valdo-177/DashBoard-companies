"use client"
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import React, { useState } from 'react'
import { FormCreateCustomer } from './FormCreateCustomer';

export const HeaderCompanies = () => {
    const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <div className='flex items-center justify-between'>
        <h2 className='text-2xl'>List of companies</h2>

        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button>Create Company</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[625px]'>
                <DialogHeader>
                    <DialogTitle>Create Customer</DialogTitle>
                    <DialogDescription>
                        Create and configure your customer
                    </DialogDescription>
                </DialogHeader>
                <FormCreateCustomer/>
            </DialogContent>
        </Dialog>
    </div>
  )
}