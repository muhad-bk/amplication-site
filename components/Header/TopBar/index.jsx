import Link from "next/link";

const TopBar = () => {
  return (
    <div className='w-full bg-light-blue laptop:mb-[-1px]'>
      <Link href={process.env.NEXT_PUBLIC_GITHUB_LINK} passHref>
        <a className='w-full hidden laptop:flex justify-center items-center max-w-container m-container p-container py-3 cursor-pointer hover:opacity-50 transition-opacity duration-300'>
          <span className='inline-block mx-1.5'>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.58756 0.601794C7.78617 0.312008 8.21383 0.312007 8.41244 0.601793L10.7209 3.97006C10.7859 4.06492 10.8816 4.13447 10.9919 4.16699L14.9087 5.32158C15.2456 5.42091 15.3778 5.82765 15.1636 6.10608L12.6735 9.34237C12.6034 9.43351 12.5668 9.54605 12.57 9.66101L12.6822 13.7429C12.6919 14.094 12.3459 14.3454 12.0149 14.2277L8.16752 12.8596C8.05917 12.821 7.94083 12.821 7.83248 12.8596L3.98511 14.2277C3.65411 14.3454 3.30812 14.094 3.31778 13.7429L3.43004 9.66101C3.4332 9.54605 3.39664 9.43351 3.32651 9.34237L0.836438 6.10608C0.622207 5.82765 0.754362 5.42091 1.09134 5.32158L5.00809 4.16699C5.1184 4.13447 5.21413 4.06492 5.27915 3.97006L7.58756 0.601794Z"
                fill="#F5B82E"/>
            </svg>
          </span>
          <span className='font-dmmono text-white text-xs leading-tight'>
            Amplication is open source. Star our GitHub repo!
          </span>
          <span className='inline-block mx-1.5'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0C3.58267 0 0 3.67255 0 8.20224C0 11.8263 2.292 14.9007 5.47133 15.9855C5.87067 16.0614 6 15.8071 6 15.5911V14.0641C3.77467 14.5603 3.31133 13.0962 3.31133 13.0962C2.94733 12.1482 2.42267 11.896 2.42267 11.896C1.69667 11.3868 2.478 11.3977 2.478 11.3977C3.28133 11.4551 3.704 12.2432 3.704 12.2432C4.41733 13.4968 5.57533 13.1345 6.032 12.9247C6.10333 12.395 6.31067 12.0327 6.54 11.8283C4.76333 11.6198 2.89533 10.9165 2.89533 7.77436C2.89533 6.87826 3.208 6.1469 3.71933 5.57274C3.63667 5.36563 3.36267 4.53106 3.79733 3.40188C3.79733 3.40188 4.46933 3.18179 5.998 4.24261C6.636 4.06079 7.32 3.96989 8 3.96647C8.68 3.96989 9.36467 4.06079 10.004 4.24261C11.5313 3.18179 12.202 3.40188 12.202 3.40188C12.6373 4.53174 12.3633 5.36632 12.2807 5.57274C12.794 6.1469 13.104 6.87895 13.104 7.77436C13.104 10.9247 11.2327 11.6185 9.45133 11.8215C9.738 12.0758 10 12.5747 10 13.3403V15.5911C10 15.8091 10.128 16.0655 10.534 15.9848C13.7107 14.8987 16 11.8249 16 8.20224C16 3.67255 12.418 0 8 0Z"
                fill="white"/>
            </svg>
          </span>
        </a>
      </Link>
    </div>
  )
}

export default TopBar
