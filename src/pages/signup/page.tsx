import {SignUpForm} from "@/components/doublechack-components/signup-form"

export default function SignUpPage() {
    return (
         <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-sm">
                <SignUpForm />
            </div>
        </div>
    )
}