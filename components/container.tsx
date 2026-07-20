import { ReactNode } from "react";

export default function Container({ children }: {children?: ReactNode} ){
    return(
       <section className="w-full min-h-screen px-5 py-4 ">
        { children }
       </section>
    )
}