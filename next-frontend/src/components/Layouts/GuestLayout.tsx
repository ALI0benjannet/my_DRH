import { PropsWithChildren, useContext } from 'react'
import Head from 'next/head'
import { LayoutContext } from '../../layout/context/layoutcontext';
import { classNames } from 'primereact/utils';

const GuestLayout = ({ children }: PropsWithChildren) => {
    console.log('here')
    const { layoutConfig } = useContext(LayoutContext);
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className={containerClassName}>
                
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
