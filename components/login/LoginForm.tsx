import { motion } from "framer-motion";

export default function LoginForm({ isAnimDone }: { isAnimDone: boolean }) {
    return (
        isAnimDone && (
            <motion.div
                className="mt-10 z-30 font-quicksand w-1/3 bg-[#07081b]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
            >
                <form
                    className="border-2 border-blue-950 rounded-lg"
                    action="#"
                >
                    <div className="p-5 flex flex-col gap-4">
                        <label className="font-bold" htmlFor="name">
                            NAME
                        </label>
                        <input
                            className="outline-none border focus:border-blue-900 border-blue-950 p-4 rounded-md text-green-300 bg-transparent"
                            type="text"
                            name="username"
                            id="name"
                        />
                    </div>
                    <hr className="border-blue-950 border-2" />
                    <div className="p-5 flex flex-col gap-4">
                        <label className="font-bold" htmlFor="password">
                            PASSWORD
                        </label>
                        <input
                            className="outline-none border focus:border-blue-900 border-blue-950 p-4 rounded-md text-green-300 bg-transparent"
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                </form>
                <button
                    className="w-full bg-green-300 hover:bg-green-400 mt-4 text-blue-950 font-bold rounded-lg p-3 text-lg"
                    type="submit"
                >
                    Let&apos;s Go!
                </button>
            </motion.div>
        )
    );
}

//[box-shadow:rgba(149,157,165,0.2)_0px_3px_24px]
