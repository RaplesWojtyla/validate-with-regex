import Register from "./components/Register"

const App = () => {
	return (
		<div className="min-h-screen flex font-poppins">
			<div className="w-[60%] min-h-screen bg-[url('bg.png')] bg-cover bg-center">
				<div className="py-6 px-8 h-full flex flex-col justify-between">
					<p className="text-3xl font-bold bg-gradient-to-br from-cyan-400 to-blue-800 bg-clip-text text-transparent"><span className="text-4xl">W</span>ojtyla</p>

					<div className="text-white text-4xl font-bold opacity-80">
						<p>SIGN IN TO YOUR</p>
						<p className="bg-gradient-to-br from-purple-400 to-purple-900 bg-clip-text text-transparent">ADVENTURE!</p>
					</div>
				</div>
			</div>
			<div className="min-h-screen w-[40%] bg-[#160430] flex flex-col justify-center items-center">
				<Register />
			</div>
		</div>
	)
}

export default App
