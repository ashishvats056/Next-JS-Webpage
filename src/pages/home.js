import '../app/globals.css'
import Link from 'next/link'

export default function Homepage() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 ps-5 pr-2.5 py-2.5 bg-neutral-900 justify-center items-center flex">
                <div className="pt-2 self-stretch justify-start items-start gap-x-16 flex">
                    <Link href="/home" className="text-white text-sm font-normal">Home</Link>
                    <Link href="/home" className="text-white text-sm font-normal">Contents</Link>
                    <Link href="/home" className="text-white text-sm font-normal">Categories</Link>
                    <Link href="/home" className="text-white text-sm font-normal">Settings</Link>
                </div>
                <Link href="/login" className="self-stretch ml-auto pl-[3px] pr-[15px] py-[3px] bg-white rounded-[36px] justify-end items-center gap-[5px] inline-flex">
                    <img className="w-[30px] h-[30px] rounded-full" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80" />
                    <div className="text-gray-900 text-sm font-normal">İsmail İhsan Bülbül</div>
                </Link>
            </div>
            <div className="w-[260px] h-[2252px] pb-[1534px] left-0 top-[55px] absolute bg-neutral-800 flex-col justify-start items-center inline-flex">
                <div className="self-stretch h-[718px] flex-col justify-start items-start inline-flex">
                    <div className="self-stretch h-[77px] px-[30px] py-[15px] flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch p-2.5 bg-neutral-200 rounded-[5px] justify-start items-center gap-[5px] inline-flex">
                            <div className="w-6 h-6 relative" />
                            <div className="text-neutral-900 text-lg font-medium">New Item</div>
                        </div>
                    </div>
                    <div className="self-stretch px-[30px] py-[15px] border-t border-neutral-900 justify-between items-center gap-[21px] inline-flex">
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-[18px] h-[18px] relative">
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[3px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[3px] absolute rounded-[1px] border border-white" />
                            </div>
                            <div className="text-white text-base font-medium">Dashboard</div>
                        </div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                    <div className="self-stretch h-[209px] pl-[50px] pb-[15px] flex-col justify-start items-start gap-2.5 flex">
                        <div className="text-white text-base font-medium">Commerce</div>
                        <div className="text-white text-base font-medium">Analytics</div>
                        <div className="text-white text-base font-medium">Crypto</div>
                        <div className="text-white text-base font-medium">Helpdesk</div>
                        <div className="text-white text-base font-medium">Monitoring</div>
                        <div className="text-white text-base font-medium">Fitnes</div>
                    </div>
                    <div className="self-stretch px-[30px] py-[15px] border-t border-neutral-900 justify-between items-center gap-[21px] inline-flex">
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-[18px] h-[18px] relative">
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[3px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[3px] absolute rounded-[1px] border border-white" />
                            </div>
                            <div className="text-white text-base font-medium">Application</div>
                        </div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                    <div className="self-stretch px-[30px] py-[15px] border-t border-neutral-900 justify-between items-center gap-[21px] inline-flex">
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-[18px] h-[18px] relative">
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[3px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[3px] absolute rounded-[1px] border border-white" />
                            </div>
                            <div className="text-white text-base font-medium">Elements</div>
                        </div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                    <div className="self-stretch px-[30px] py-[15px] border-t border-neutral-900 justify-between items-center gap-[21px] inline-flex">
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-[18px] h-[18px] relative">
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[3px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[3px] absolute rounded-[1px] border border-white" />
                            </div>
                            <div className="text-white text-base font-medium">Forms</div>
                        </div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                    <div className="self-stretch px-[30px] py-[15px] border-t border-neutral-900 justify-between items-center gap-[21px] inline-flex">
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-[18px] h-[18px] relative">
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[3px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[3px] absolute rounded-[1px] border border-white" />
                            </div>
                            <div className="text-white text-base font-medium">Plugins</div>
                        </div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                    <div className="self-stretch px-[30px] py-[15px] border-t border-neutral-900 justify-between items-center gap-[21px] inline-flex">
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-[18px] h-[18px] relative">
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[3px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[3px] absolute rounded-[1px] border border-white" />
                            </div>
                            <div className="text-white text-base font-medium">Elements</div>
                        </div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                    <div className="self-stretch px-[30px] py-[15px] border-t border-neutral-900 justify-between items-center gap-[21px] inline-flex">
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-[18px] h-[18px] relative">
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[3px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[3px] absolute rounded-[1px] border border-white" />
                            </div>
                            <div className="text-white text-base font-medium">Datagrid</div>
                        </div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                    <div className="self-stretch px-[30px] py-[15px] border-t border-neutral-900 justify-between items-center gap-[21px] inline-flex">
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-[18px] h-[18px] relative">
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[3px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[3px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[10.50px] absolute rounded-[1px] border border-white" />
                                <div className="w-[4.50px] h-[4.50px] left-[10.50px] top-[3px] absolute rounded-[1px] border border-white" />
                            </div>
                            <div className="text-white text-base font-medium">Settings</div>
                        </div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                </div>
            </div>
            <div className="px-[50px] pt-4 pb-[17px] left-[260px] top-[55px] absolute bg-white justify-center items-center gap-[337px] inline-flex">
                <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
                    <div className="text-neutral-800 text-[22px] font-semibold">Add new post</div>
                    <div className="justify-start items-start gap-[25px] flex">
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-6 h-6 relative" />
                            <div className="text-neutral-800 text-base font-normal">Add Content</div>
                        </div>
                        <div className="justify-start items-center gap-[5px] flex">
                            <div className="w-6 h-6 relative" />
                            <div className="text-neutral-800 text-base font-normal">Settings</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch p-2.5 bg-white rounded-[5px] border border-neutral-300 justify-between items-center gap-[29px] inline-flex">
                    <div className="text-black text-base font-normal">Search content..</div>
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
            <div className="left-[290px] top-[162px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="w-[1120px] justify-start items-start gap-5 inline-flex">
                    <div className="grow shrink basis-0 h-[91px] p-5 bg-white rounded-[10px] justify-start items-start gap-2.5 flex">
                        <div className="w-[45px] h-[45px] relative" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="text-neutral-800 text-xs font-light">Total Sales</div>
                            <div className="text-neutral-800 text-[22px] font-semibold">$2,456</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 h-[91px] p-5 bg-white rounded-[10px] justify-start items-start gap-2.5 flex">
                        <div className="w-[45px] h-[45px] relative" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="text-neutral-800 text-xs font-light">Total Expenses</div>
                            <div className="text-neutral-800 text-[22px] font-semibold">$3,326</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 h-[91px] p-5 bg-white rounded-[10px] justify-start items-start gap-2.5 flex">
                        <div className="w-[45px] h-[45px] relative" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="text-neutral-800 text-xs font-light">Total Visitors</div>
                            <div className="text-neutral-800 text-[22px] font-semibold">5,325</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 h-[91px] p-5 bg-white rounded-[10px] justify-start items-start gap-2.5 flex">
                        <div className="w-[45px] h-[45px] relative" />
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="text-neutral-800 text-xs font-light">Total Orders</div>
                            <div className="text-neutral-800 text-[22px] font-semibold">1,326</div>
                        </div>
                    </div>
                </div>
                <div className="h-[709px] p-[30px] bg-white rounded-[10px] flex-col justify-start items-start gap-5 flex">
                    <div className="flex-col justify-start items-start flex">
                        <div className="text-neutral-800 text-[22px] font-semibold">Form title</div>
                        <div className="text-neutral-800 text-base font-light">Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</div>
                    </div>
                    <div className="self-stretch p-[15px] bg-red-50 rounded-[5px] border border-red-400 justify-start items-start gap-2.5 inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="text-red-900 text-base font-normal">Senectus malesuada suspendisse bibendum elit amet vitae.</div>
                    </div>
                    <div className="self-stretch rounded-[5px] border border-neutral-300 justify-center items-center inline-flex">
                        <div className="grow shrink basis-0 bg-white flex-col justify-start items-start inline-flex">
                            <div className="self-stretch px-5 py-2.5 bg-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-lg font-medium">Table Title</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Etiam purus in</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Duis eget habitant</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Aliquam velit lacus</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Fermentum scelerisque ultricies</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Integer semper pellentesque</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Parturient at id</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Amet, pretium eget</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Risus consequat sollicitudin</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Risus consequat sollicitudin</div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 bg-white border-l border-neutral-200 flex-col justify-start items-start inline-flex">
                            <div className="self-stretch px-5 py-2.5 bg-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-lg font-medium">Table Title</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Curabitur donec duis</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">At amet odio</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Pellentesque egestas placerat</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Morbi sagittis nulla</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Neque turpis enim</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Sem neque, mattis</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">In ipsum volutpat</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Adipiscing odio nulla</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Adipiscing odio nulla</div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 bg-white border-l border-neutral-200 flex-col justify-start items-start inline-flex">
                            <div className="self-stretch px-5 py-2.5 bg-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-lg font-medium">Table Title</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Morbi pharetra, accumsan</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Commodo eget scelerisque</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Tortor habitant sit</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Quam semper quis</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Egestas non sociis</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Pellentesque facilisis massa</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Ut feugiat egestas</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Pharetra id sit</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-normal">Pharetra id sit</div>
                            </div>
                        </div>
                        <div className="w-[180px] bg-white border-l border-neutral-200 flex-col justify-start items-start inline-flex">
                            <div className="self-stretch px-5 py-2.5 bg-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-lg font-medium">Table Title</div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-center gap-2.5 inline-flex">
                                <div className="px-[5px] py-[3px] bg-blue-700 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Edit</div>
                                </div>
                                <div className="px-[5px] py-[3px] bg-amber-600 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Delete</div>
                                </div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-center gap-2.5 inline-flex">
                                <div className="px-[5px] py-[3px] bg-blue-700 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Edit</div>
                                </div>
                                <div className="px-[5px] py-[3px] bg-amber-600 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Delete</div>
                                </div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-center gap-2.5 inline-flex">
                                <div className="px-[5px] py-[3px] bg-blue-700 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Edit</div>
                                </div>
                                <div className="px-[5px] py-[3px] bg-amber-600 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Delete</div>
                                </div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-center gap-2.5 inline-flex">
                                <div className="px-[5px] py-[3px] bg-blue-700 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Edit</div>
                                </div>
                                <div className="px-[5px] py-[3px] bg-amber-600 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Delete</div>
                                </div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-center gap-2.5 inline-flex">
                                <div className="px-[5px] py-[3px] bg-blue-700 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Edit</div>
                                </div>
                                <div className="px-[5px] py-[3px] bg-amber-600 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Delete</div>
                                </div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-center gap-2.5 inline-flex">
                                <div className="px-[5px] py-[3px] bg-blue-700 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Edit</div>
                                </div>
                                <div className="px-[5px] py-[3px] bg-amber-600 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Delete</div>
                                </div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-center gap-2.5 inline-flex">
                                <div className="px-[5px] py-[3px] bg-blue-700 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Edit</div>
                                </div>
                                <div className="px-[5px] py-[3px] bg-amber-600 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Delete</div>
                                </div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 bg-neutral-100 justify-start items-center gap-2.5 inline-flex">
                                <div className="px-[5px] py-[3px] bg-blue-700 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Edit</div>
                                </div>
                                <div className="px-[5px] py-[3px] bg-amber-600 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Delete</div>
                                </div>
                            </div>
                            <div className="self-stretch px-5 py-2.5 justify-start items-center gap-2.5 inline-flex">
                                <div className="px-[5px] py-[3px] bg-blue-700 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Edit</div>
                                </div>
                                <div className="px-[5px] py-[3px] bg-amber-600 rounded-[3px] justify-start items-center gap-[5px] flex">
                                    <div className="w-[18px] h-[18px] relative" />
                                    <div className="text-white text-xs font-normal">Delete</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-center items-center gap-[5px] inline-flex">
                        <div className="w-[18px] h-[18px] relative opacity-40" />
                        <div className="w-[35px] h-[35px] rounded-[5px] border border-neutral-400 justify-center items-center gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-medium">1</div>
                        </div>
                        <div className="w-[35px] h-[35px] bg-blue-600 rounded-[5px] justify-center items-center gap-[5px] flex">
                            <div className="text-white text-sm font-medium">2</div>
                        </div>
                        <div className="w-[35px] h-[35px] rounded-[5px] border border-neutral-400 justify-center items-center gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-medium">3</div>
                        </div>
                        <div className="w-[35px] h-[35px] rounded-[5px] border border-neutral-400 justify-center items-center gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-medium">4</div>
                        </div>
                        <div className="w-[35px] h-[35px] rounded-[5px] border border-neutral-400 justify-center items-center gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-medium">5</div>
                        </div>
                        <div className="w-[18px] h-[18px] relative" />
                    </div>
                </div>
                <div className="h-[653px] p-[30px] bg-white rounded-[10px] flex-col justify-start items-start gap-5 flex">
                    <div className="flex-col justify-start items-start flex">
                        <div className="text-neutral-800 text-[22px] font-semibold">Form title</div>
                        <div className="text-neutral-800 text-base font-light">Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</div>
                    </div>
                    <div className="justify-start items-start gap-2.5 inline-flex">
                        <div className="pl-[5px] pr-2.5 py-[5px] bg-amber-200 rounded-[5px] border border-amber-600 justify-start items-center gap-[5px] flex">
                            <div className="w-[25px] h-[25px] relative rounded-[3px]" />
                            <div className="text-neutral-800 text-base font-normal">English</div>
                        </div>
                        <div className="pl-[5px] pr-2.5 py-[5px] rounded-[5px] border border-neutral-300 justify-start items-center gap-[5px] flex">
                            <div className="w-[25px] h-[25px] relative rounded-[3px]">
                                <div className="w-[25px] h-[25px] left-0 top-0 absolute">
                                </div>
                            </div>
                            <div className="text-neutral-800 text-base font-normal">Turkish</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[70px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-neutral-800 text-sm font-light">Label title</div>
                        <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                            <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-5 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                            <div className="text-neutral-800 text-sm font-light">Label title</div>
                            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-between items-center gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Chose</div>
                                <div className="w-6 h-6 relative" />
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                            <div className="text-neutral-800 text-sm font-light">Label title</div>
                            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                            <div className="text-neutral-800 text-sm font-light">Label title</div>
                            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-5 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                            <div className="text-neutral-800 text-sm font-light">Label title</div>
                            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                            <div className="text-neutral-800 text-sm font-light">Label title</div>
                            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[191px] flex-col justify-start items-start gap-[5px] flex">
                        <div className="text-neutral-800 text-sm font-light">Label Title</div>
                        <div className="self-stretch h-[165px] px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                            <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                        </div>
                    </div>
                </div>
                <div className="w-[1120px] justify-start items-start gap-[30px] inline-flex">
                    <div className="grow shrink basis-0 p-[30px] bg-white rounded-[10px] flex-col justify-start items-start gap-5 inline-flex">
                        <div className="flex-col justify-start items-start flex">
                            <div className="text-neutral-800 text-[22px] font-semibold">Form title</div>
                            <div className="text-neutral-800 text-base font-light">Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</div>
                        </div>
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-light">Label title</div>
                            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-light">Label title</div>
                            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-between items-center gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Chose</div>
                                <div className="w-6 h-6 relative" />
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-5 inline-flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                <div className="text-neutral-800 text-sm font-light">Label title</div>
                                <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
                                <div className="text-neutral-800 text-sm font-light">Label title</div>
                                <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                                    <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[191px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-light">Label Title</div>
                            <div className="self-stretch h-[165px] px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[310px] p-[30px] bg-white rounded-[10px] flex-col justify-start items-start gap-5 inline-flex">
                        <div className="flex-col justify-start items-start flex">
                            <div className="text-neutral-800 text-[22px] font-semibold">Form title</div>
                        </div>
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-light">Label title</div>
                            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                            </div>
                        </div>
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-light">Label title</div>
                            <div className="self-stretch px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-between items-center gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Chose</div>
                                <div className="w-6 h-6 relative" />
                            </div>
                        </div>
                        <div className="self-stretch h-[191px] flex-col justify-start items-start gap-[5px] flex">
                            <div className="text-neutral-800 text-sm font-light">Label Title</div>
                            <div className="self-stretch h-[165px] px-[15px] py-2.5 bg-white rounded-[5px] border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                                <div className="text-neutral-800 text-base font-light">Placeholder content</div>
                            </div>
                        </div>
                        <div className="self-stretch px-5 py-2.5 bg-blue-600 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                            <div className="text-white text-base font-medium">Button title</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}