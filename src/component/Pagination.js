const Pagination = ({ pageSize, changePage, currentPage }) => {
	const chan = (e) => {
		changePage(parseInt(e.target.innerHTML));
	};
	let page = [];
	for (let i = 1; i <= pageSize; i++) page.push(i);
	return (
		<nav aria-label='Page navigation example'>
			<ul class='list-style-none flex'>
				<li>
					<div class='relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white' aria-label='Previous'>
						<span aria-hidden='true'>&laquo;</span>
					</div>
				</li>

				{page.map((p) => {
					return (
						<>
							{p === currentPage ? (
								<li aria-current='page'>
									<div class='relative hover:cursor-pointer block rounded px-3 py-1.5 text-base text-neutral-500 transition-all duration-300 bg-neutral-300 dark:text-white dark:hover:bg-neutral-900 dark:hover:text-white'>{p}</div>
								</li>
							) : (
								<li>
									<div class='relative hover:cursor-pointer block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300 hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white' onClick={(e) => chan(e)}>
										{p}
									</div>
								</li>
							)}
						</>
					);
				})}

				<li>
					<div class='relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white' aria-label='Next'>
						<span aria-hidden='true'>&raquo;</span>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
