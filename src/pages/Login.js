import { useContext, useEffect, useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Api, { authApi, endpoints } from "../configs/Api";
import cookie from "react-cookies";
import { MyUserContext } from "../App";
import jwt_decode from "jwt-decode";
import { Link, Navigate, useSearchParams } from "react-router-dom";
const Login = () => {
	function handleCallbackResponse(response) {
		console.log("Encoded JWT ID token: " + response.credential);
		var userObject = jwt_decode(response.credential);
		console.log(userObject);
		cookie.save("token", response.credential);

		const process = async () => {
			try {
				let { data } = await authApi().get(endpoints["currentUser"]);
				cookie.save("user", data);

				dispatch({
					type: "login",
					payload: data,
				});
			} catch (ex) {
				console.error(ex);
				setErr("Something wrong happened! Please try again later.");
			}
		};

		process();
	}

	useEffect(() => {
		/* global google*/
		google.accounts.id.initialize({
			client_id: "851897019747-ha2l1kk2jjo2rlom8pe6t7tgrudfgoao.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});

		google.accounts.id.renderButton(document.getElementById("googleBtn"), { theme: "outline", size: "large" });
		google.accounts.id.prompt();
	}, []);

	const [user, dispatch] = useContext(MyUserContext);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [err, setErr] = useState(null);
	const [q] = useSearchParams();

	const login = (e) => {
		e.preventDefault();

		const process = async () => {
			let res = null;
			try {
				res = await Api.post(endpoints["login"], {
					email: email,
					password: password,
				});
				cookie.save("token", res.data);
			} catch (ex) {
				console.error(ex);
				setErr("Email or password doesn't correct!");
			}
			if (res != null) {
				try {
					let { data } = await authApi().get(endpoints["currentUser"]);
					cookie.save("user", data);

					dispatch({
						type: "login",
						payload: data,
					});
				} catch (ex) {
					console.error(ex);
					setErr("Something wrong happened! Please try again later.");
				}
			}
		};

		process();
	};

	// const testGoogle = () => {
	// 	let form = new FormData();
	// 	form.append("tokenId", googleMail);
	// 	const process = async () => {
	// 		let res = await Api.post(endpoints["googleTest"], form);
	// 		if (res.status === 200) {
	// 			console.log("LOG IN SUCCESS");
	// 		}
	// 	};
	// 	process();
	// };

	if (user !== null) {
		let next = q.get("next") || "/";

		return <Navigate to={next} />;
	}

	return (
		<>
			{err === null ? (
				""
			) : (
				<div className='mb-4 rounded-lg bg-danger-100 text-center px-6 py-5 text-base text-danger-700' role='alert'>
					{err}
				</div>
			)}
			<section className='w-7/12 m-auto my-20 p-20 rounded-3xl bg-[#F2F6F8]'>
				<div className='h-full'>
					{/* <!-- Left column container with background--> */}
					<div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
						<div className='shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12'>
							<img src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' className='w-full' alt='' />
						</div>

						{/* <!-- Right column container --> */}
						<div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12'>
							<form onSubmit={login}>
								{/* <!--Sign in section--> */}
								<div className='flex flex-row items-center justify-center lg:justify-start'>
									<div id='googleBtn'></div>
								</div>

								{/* <!-- Separator between social media sign in and email/password sign in --> */}
								<div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
									<p className='mx-4 mb-0 text-center font-semibold dark:text-white'>Or</p>
								</div>
								{/* <!-- Email input --> */}
								<TEInput type='email' label='Email address' size='lg' value={email} onChange={(e) => setEmail(e.target.value)} className='mb-6'></TEInput>

								{/* <!--Password input--> */}
								<TEInput type='password' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='mb-6' size='lg'></TEInput>

								<div className='mb-6 flex items-center justify-between'>
									{/* <!-- Remember me checkbox --> */}
									<div className='mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]'>
										<input
											className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
											type='checkbox'
											value=''
											id='exampleCheck2'
										/>
										<label className='inline-block pl-[0.15rem] hover:cursor-pointer' htmlFor='exampleCheck2'>
											Remember me
										</label>
									</div>

									{/* <!--Forgot password link--> */}
									<a href='#!'>Forgot password?</a>
								</div>

								{/* <!-- Login button --> */}
								<div className='text-center lg:text-left'>
									<TERipple rippleColor='light'>
										<button
											type='submit'
											className='inline-block rounded hover:shadow-indigo-500/40 hover:bg-btnHover bg-primary-500 transition duration-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-btnHover focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-btnHover active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
											Login
										</button>
									</TERipple>
									{/* <!-- Register link --> */}
									<p className='mb-0 mt-2 pt-1 text-sm font-semibold'>
										Don't have an account?{" "}
										<Link to='/register' className='text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700'>
											Register
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
