const Footer = () => {
  return (
    <section className="bg-gradient-to-t from-[#28354F] to-[#040312] text-white font-outfit text-[16px] pb-2">
        <div className="flex justify-center items-center">
            <div className="h-px w-3/4 bg-white rounded-full"></div>
        </div>
        <div className="flex justify-center items-center mt-5">
            <footer className="w-3/4 flex flex-col justify-center items-center gap-8">
                <div className="w-1/2 flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-start gap-4">
                        <a href="/blogs">
                            <p>Blogs</p>
                        </a>
                        <a href="/get-app">
                            <p>Get Deskop/Mobile Apps</p>
                        </a>
                        <a href="/legal">
                            <p>Legal & Privacy Information</p>
                        </a>
                    </div>
                    <div className="flex flex-col justify-start gap-4">
                        <a href="/help">
                            <p>Help Center</p>
                        </a>
                        <a href="/contact">
                            <p>Contact Us</p>
                        </a>
                        <div className="flex flex-row gap-4">
                            {/* Replace the bottom divs with social media icons */}
                            <a href="/">
                                <div className="bg-pink-200 opacity-30 w-[20px] h-[20px]"></div>
                            </a>
                            <a href="/">
                                <div className="bg-pink-200 opacity-30 w-[20px] h-[20px]"></div>
                            </a>
                            <a href="/">
                                <div className="bg-pink-200 opacity-30 w-[20px] h-[20px]"></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Daneízo - Copyright ©  2024. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    </section>
  )
}

export default Footer