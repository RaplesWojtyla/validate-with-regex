import { useMemo, useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

const Register = () => {
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const emailError = useMemo(() => {
		if (email === '') return null

		if (!email.includes('@')) return 'Email harus menggunakan @'

		const domain = email.split('@')[1]
		if (!domain) return 'Email harus memiliki domain'

		if (!domain.includes('.')) return 'Domain harus mengandung titik'

		const extension = domain.split('.')[1]
		if (!/^[a-zA-Z]{2,}$/.test(extension)) return 'Domain harus mengandung ekstensi (contoh: .com)'

		if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) return 'Email harus mengandung username'

		return null
	}, [email])

	const passwordRequirements = useMemo(() => ([
		{
			label: "Minimal 8 karakter",
			validator: password.length > 7,
		},
		{
			label: "Mengandung huruf kapital",
			validator: /[A-Z]/.test(password),
		},
		{
			label: "Mengandung huruf kecil",
			validator: /[a-z]/.test(password),
		},
		{
			label: "Mengandung simbol",
			validator: /[!@#$%^&*(),.?":{}|<>]/.test(password),
		},
		{
			label: "Mengandung angka",
			validator: /[0-9]/.test(password)
		},
	]), [password])

	const passwordStrength = useMemo(() => {
		const met = Object.values(passwordRequirements).filter(val => val.validator).length

		if (met === 0) return ""
		else if (met < 3) return "Lemah"
		else if (met < 5) return "Sedang"
		
		return "Kuat"
	}, [passwordRequirements])

	return (
		<>
			<p className="font-bold text-5xl text-white">Register</p>

			<div className="mt-8 text-white">
				<label className="block font-medium mb-2" htmlFor="email">Email</label>
				<input
					className={`w-72 px-3 py-3 bg-[#261046] rounded-md border font-medium focus:outline-none bg-transparent
						${emailError && 'border-red-500'} 
						${/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && 'border-green-500'}		
					`}
					id="email" 
					placeholder="youremail@gmail.com"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				{emailError && (
					<p className="text-sm font-medium max-w-72 text-red-600 mt-1 ml-1">{emailError}</p>
				)}
			</div>

			<div className="mt-5 text-white">
				<label className="block mb-2 font-medium" htmlFor="password">Password</label>
				<input
					className={`w-72 px-3 py-3 bg-[#261046] rounded-md border font-medium focus:outline-none bg-transparent
						
					`}
					id="password" 
					placeholder="Create Your Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<div className="mt-3">
					<p>
						Kekuatan Password: {' '}
						<span
							className={`font-medium ${
								passwordStrength === 'Kuat' ? 'text-green-500' :
								passwordStrength === 'Sedang' ? 'text-yellow-500' : 'text-red-500'
							}`}
						>
							{passwordStrength}
						</span>
					</p>

					{password.length > 0 && (
						<ul>
							{passwordRequirements.map((obj, idx) => (
								<li 
									key={idx}
									className={`flex items-center gap-x-2 ${obj.validator ? 'text-green-500' : 'text-red-500'}`}
								>
									{obj.validator ? <FaCheck className="size-5"/> : <FaXmark className="size-5"/>}
									{obj.label}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>

			<button className="mt-20 text-white font-medium max-w-[300px] w-full py-3 bg-gradient-to-br from-[#501794] to-[#3E70A1] rounded-lg">
				Register
			</button>
		</>
	)
}

export default Register