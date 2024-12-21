'use client'
import Image from 'next/image';
import React from 'react';

const Empty = ({msg}) => {
    return (
        <div className='w-full flex flex-col items-center my-8'>
            <Image src='/images/Empty.png' width={250} height={230} alt='Empty' />
            <p className='text-xl text-slate-500'>{msg}</p>
        </div>
    );
}

export default Empty;
