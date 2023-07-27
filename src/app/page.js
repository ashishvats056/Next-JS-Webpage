import Link from 'next/link'

export default function Home() {
    return (
        <div className="w-[900px] h-[564px] pr-10 bg-white rounded-[10px] justify-start items-center gap-10 inline-flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <img className="w-[450px] h-[564px]" src="https://s3-alpha-sig.figma.com/img/5a30/b360/1eb9f6c9fb512e633d50113c5998e1e4?Expires=1691366400&Signature=RQigEmYYtAbQl0YOpC21WXzmJsj8vGMjXsUS~BXYYebE~HziVxzIda9c6CH-uNAcsHwYkdWfIlUWuNl5oCLPFvfvSQff-nt91Sr~t06KvR3JbQvksRCrhI3N9IzfrSVBTChEoAw65jZj8ZLdNHb1dQF0sDg0Eq8bQi8zW6mLI3Qcg0wrvso-sEy100IZj51izNtt9UlQ3fYp-Pjegh5518tGE5AbE36qYmqCkMVbG6v4lby-t9Js0kvPtUBLF3wnerhBS88fsMa~MjgauA9fUSq1VAJaSgOmsz7VPFg5BGca-VjheO2Msk9I5NgvrEGwdP3yt4JLCcRXSj77AJAnaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <div className="pt-7 self-stretch flex-col justify-start items-start gap-10 inline-flex">
                <div className="flex-col justify-start items-start flex">
                    <div className="text-neutral-800 text-[22px] font-semibold">Login</div>
                    <div className="text-neutral-800 text-base font-light">Donec tortor quam at duis tortor.</div>
                </div>
                <div className="flex-col justify-start items-end gap-5 flex">
                    <div className="w-[370px] h-[70px] flex-col justify-start items-start gap-[5px] flex">
                        <label for="email" className="text-neutral-800 text-sm font-light">E-Mail</label>
                        <input type='email' id='email' name='email' placeholder='Placeholder content' className="self-stretch px-5 py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex text-neutral-800 text-base font-light" />
                    </div>
                    <div className="self-stretch h-[70px] flex-col justify-start items-start gap-[5px] flex">
                        <label for="password" className="text-neutral-800 text-sm font-light">Password</label>
                        <input type='password' id='password' name='password' placeholder='Placeholder content' className="self-stretch px-5 py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex text-neutral-800 text-base font-light" />
                    </div>
                    <Link href="/login">
                        <button className="text-neutral-600 text-sm font-semibold">Forgot password?</button>
                    </Link>
                    <Link href="/home"  className="self-stretch px-5 py-2.5 bg-blue-600 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                        <button className="text-white text-base font-medium">Login</button>
                    </Link>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-[370px] justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 h-[0px] border border-neutral-200"></div>
                        <div className="px-2.5 py-[5px] bg-white flex-col justify-start items-start gap-2.5 inline-flex text-neutral-400 text-xs font-light">or</div>
                        <div className="grow shrink basis-0 h-[0px] border border-neutral-200"></div>
                    </div>
                    <Link href="/register" className="self-stretch px-5 py-2.5 rounded-[5px] border border-neutral-600 justify-center items-center gap-2.5 inline-flex">
                        <button className="text-neutral-600 text-base font-medium">Register now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
