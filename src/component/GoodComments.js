import { TERipple } from "tw-elements-react";
import CommentCard from "./CommentCard";

const GoodComments = () => {
	return (
		<>
			<div>
				<div className='w-8/12 m-auto h-[400px] border-b-violet-900 border-b-2 mt-11'>
					<div className=' text-[#20415B] font-extrabold text-2xl text-center flex justify-center m-6'>
						<span className='bg-[#F2F6F8] p-2 rounded-3xl block w-2/3 '>People from around the world trust Busbud</span>
					</div>
					<div className='grid grid-cols-4 gap-2'>
						<CommentCard />
						<CommentCard />
						<CommentCard />
						<CommentCard />
					</div>
					<div className='pt-10 flex justify-center flex-col'>
						<div className=' text-center mb-2 text-[#20415B] font-semibold'>Satisfied ?</div>
						<TERipple className='m-auto'>
							<button
								type='button'
								className='inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-bold uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'>
								Rate us
							</button>
						</TERipple>
					</div>
				</div>
			</div>
		</>
	);
};

export default GoodComments;
