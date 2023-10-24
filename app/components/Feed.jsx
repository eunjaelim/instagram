import {menu} from "../icons/Menu";

export const Feed = ()=>{
    // mark(HTML)
    // styling(CSS)
    return <div className="border-2">
        <div id ="header" className = "flex items-center justify-between w-[400px] p-2">
            {/* profile */}
        <div className="rounded-full w-10 h-10 bg-[url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw39rCUha3Uj3EfJQksnl0OP&ust=1698207823400000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJi3rKPrjYIDFQAAAAAdAAAAABAE')] mr-2" ></div>
        <div className="font-semibold">
            <div className="font-light">Name</div>
            <div>location</div>
        </div>
            {/* 더보기버튼 */}
        </div>
        <div id ="content"></div>
        <div id ="footer"></div>
        {/* 좋아요 버튼, 댓글버튼,DM버튼 */}
        <div id ="comments">
            {/* 누가 좋아요했는지 + 좋아요한 사람의 수 */}
            {/* 내가 작성한 컨텐츠의 글 */}
            {/* 댓글들 */}
        </div>
    </div>
}

