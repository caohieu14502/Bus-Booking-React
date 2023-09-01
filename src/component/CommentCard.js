import StarRating from "./StarRating";

const CommentCard = () => {
	return (
		<>
			<div className='block max-w-[18rem] rounded-lg bg-[#F8F9FA] text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
				<div className='px-6 py-2 pt-4'>
					<StarRating />
					<h3 className='mb-1 font-extrabold leading-tight text-[rgb(32,65,91)] dark:text-neutral-50'>Speed and convinient</h3>
					<p className='mb-4 text-sm leading-normal text-neutral-600 dark:text-neutral-200'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<div className='flex gap-2 '>
						<span className='font-bold text-sm'>User name:</span>
						<span className='text-sm'>3h ago</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default CommentCard;
