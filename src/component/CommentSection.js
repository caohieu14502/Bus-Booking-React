import { useContext, useEffect, useState } from "react";
import MySpinner from "./MySpinner";
import Api, { authApi, endpoints } from "../configs/Api";
import StarRating from "./StarRating";
import Moment from "react-moment";
import { MyUserContext } from "../App";
import { Link } from "react-router-dom";

const CommentSection = ({ tripId }) => {
	const [comments, setComments] = useState([]);
	const [user] = useContext(MyUserContext);
	const [content, setContent] = useState(null);
	const [rate, setRate] = useState(1);
	const [rateHover, setRateHover] = useState(1);
	let starss = [1, 2, 3, 4, 5];

	useEffect(() => {
		const loadComments = async () => {
			let { data } = await Api.get(endpoints["comment"](tripId));
			setComments(data);
		};

		loadComments();
	}, []);

	const addComment = (e) => {
		e.preventDefault();
		if (content === null) {
			return;
		}
		const process = async () => {
			let { data } = await authApi().post(endpoints["addComment"], {
				content: content,
				tripId: tripId,
				stars: rate,
			});
			setComments([...comments, data]);
			// setComments(comments.unshift(data));
		};
		process();
	};

	const ratingClick = (c) => {
		setRate(c);
		setRateHover(c);
	};

	const ratingHover = (c) => {
		setRateHover(c);
	};

	console.log(tripId);
	let url = `/login?next=/trips/${tripId}`;

	if (comments.length === 0) return <MySpinner />;

	return (
		<>
			{user === null ? (
				<div className='mb-4 mt-6 rounded-lg bg-primary-100 px-6 py-5 text-base text-primary-600 text-center' role='alert'>
					Please
					<Link to={url} className='text-danger-500 mx-[4px]'>
						Log In
					</Link>
					to comment !!!
				</div>
			) : (
				<div className='m-auto w-3/4 mt-16'>
					<form className='relative'>
						<div class='w-96'>
							<ul className='flex'>
								{starss.map((c) => {
									return (
										<li onClick={() => ratingClick(c)} onMouseOver={() => ratingHover(c)} onMouseLeave={() => ratingHover(rate)} key={c}>
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill={c <= rateHover ? "currentColor" : "none"} strokeWidth='1.5' stroke='currentColor' className='mr-1 h-5 w-5 text-warning'>
												<path
													fillRule='evenodd'
													d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
													clipRule='evenodd'
												/>
											</svg>
										</li>
									);
								})}
							</ul>
							<div class='relative w-full mt-10 min-w-[800px]'>
								<textarea
									class='peer text-base h-full min-h-[100px] w-full resize-none rounded-[7px] border-2 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-2 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-btnHover focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50'
									value={content}
									onChange={(e) => setContent(e.target.value)}
									placeholder=' '></textarea>
								<label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-lg font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-btnHover peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-btnHover peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-btnHover peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
									Comment...
								</label>
							</div>
						</div>
						<button
							onClick={(e) => addComment(e)}
							className='inline-block absolute right-1/4 max-w-[150px] focus:border-8 rounded hover:shadow-indigo-500/40 hover:bg-btnHover bg-primary-500 transition duration-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-btnHover focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-btnHover active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
							Comment
						</button>
					</form>
				</div>
			)}
			<div className='mt-20'>
				{comments.map((c) => {
					return (
						<div className='w-3/4 m-auto grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg'>
							<div className='relative flex gap-4'>
								<img src={c.userId.avatar} className='relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20' alt={c.userId.firstName} loading='lazy' />
								<div className='flex flex-col w-full'>
									<div className='flex flex-row justify-between'>
										<p className='relative text-xl whitespace-nowrap truncate overflow-hidden'>
											{c.userId.firstName} {c.userId.lastName}
										</p>
										<a className='text-gray-500 text-xl'>
											<i className='fa-solid fa-trash'></i>
										</a>
									</div>
									<p className='text-gray-400 text-sm'>
										<Moment fromNow>{c.createdAt}</Moment>
									</p>
								</div>
							</div>
							<StarRating star={c.stars} rate={setRate} />
							<p className='-mt-4 text-gray-500'>{c.content}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default CommentSection;
