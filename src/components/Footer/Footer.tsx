import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <section className="bg-gradient-to-t from-[#28354F] to-[#040312] font-outfit text-[16px] pb-2">
        <div className="flex justify-center items-center">
            <div className="h-px w-3/4 bg-white rounded-full"></div>
        </div>
        <div className="flex justify-center items-center mt-5">
            <footer className="w-3/4 flex flex-col justify-center items-center gap-8">
                <div className="w-1/2 flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-start gap-4">
                        <a href="/blogs">
                            <p className="w-fit text-white/60 transition-all duration-150 ease-in-out hover:text-white">Blogs</p>
                        </a>
                        <a href="/get-app">
                            <p className="w-fit text-white/60 transition-all duration-150 ease-in-out hover:text-white">Get Deskop/Mobile Apps</p>
                        </a>
                        <a href="/legal">
                            <p className="w-fit text-white/60 transition-all duration-150 ease-in-out hover:text-white">Legal & Privacy Information</p>
                        </a>
                    </div>
                    <div className="flex flex-col justify-start gap-4">
                        <a href="/help">
                            <p className="w-fit text-white/60 transition-all duration-150 ease-in-out hover:text-white">Help Center</p>
                        </a>
                        <a href="/contact">
                            <p className="w-fit text-white/60 transition-all duration-150 ease-in-out hover:text-white">Contact Us</p>
                        </a>
                        <div className="flex flex-row gap-4">
                            {/* Replace the bottom divs with social media icons */}
                            <a href="https://www.instagram.com" target="_blank">
                                {/* <div className="bg-pink-200 opacity-30 w-[20px] h-[20px] transition-all duration-150 ease-in-out hover:-translate-y-1 hover:scale-[1.2]"></div> */}
                                <Instagram
                                    className='w-[20px] h-[20px] text-white transition-all duration-150 ease-in-out hover:-translate-y-1 hover:scale-[1.2] hover:text-[#C13584]'
                                />
                            </a>
                            <a href="https://www.x.com" target="_blank">
                                <Twitter
                                    className='w-[20px] h-[20px] text-white transition-all duration-150 ease-in-out hover:-translate-y-1 hover:scale-[1.2] hover:text-[#1DA1F2]'
                                />
                            </a>
                            <a href="https://www.facebook.com" target="_blank">
                                <Facebook
                                    className='w-[20px] h-[20px] text-white transition-all duration-150 ease-in-out hover:-translate-y-1 hover:scale-[1.2] hover:text-[#2D68C4]'
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-white">Daneízo - Copyright ©  2024. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    </section>
  )
}

export default Footer