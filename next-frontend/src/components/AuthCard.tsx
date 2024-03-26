import { PropsWithChildren } from 'react'
import Link from 'next/link'
import ApplicationLogo from './ApplicationLogo'

const AuthCard = ({ children }: PropsWithChildren) => (
    <div className="flex flex-column align-items-center justify-content-center">
                {/* <ApplicationLogo /> */}
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
            {children}
        </div>
    </div>
    </div>
)

export default AuthCard
