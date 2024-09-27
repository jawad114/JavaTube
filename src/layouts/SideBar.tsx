import React from 'react'
import SmallSideBar from '../components/SmallSideBar'
import { Clapperboard, Gamepad, History, Home, Library, LibraryBig, LibraryIcon, MoreHorizontal, Newspaper, Play, Repeat, ThumbsUpIcon, TrendingUp, VideoIcon, Watch } from 'lucide-react'
import LargeSideBarSection from '../components/LargeSideBarSection'
import LargeSideBarItems from '../components/LargeSideBarItems'
function SideBar() {
  return (
    <>
    <aside className='sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden'>
      <SmallSideBar Icon={Home} title="Home" url="/"/>
      <SmallSideBar Icon={Repeat} title="Shorts" url="/"/>
      <SmallSideBar Icon={Clapperboard} title="Subscriptions" url="/"/>
      <SmallSideBar Icon={Library} title="Library" url="/"/>
    </aside>

    <aside className="w-56 lg:sticky lg:block hidden absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2">
  <LargeSideBarSection>
    <LargeSideBarItems Icon={Home} title="Home" url="/" isActive={true} />
    <LargeSideBarItems Icon={Repeat} title="Shorts" url="/" isActive={false} />
    <LargeSideBarItems Icon={Clapperboard} title="Home" url="/" isActive={false} />
    <LargeSideBarItems Icon={Library} title="Library" url="/" isActive={false} />
    <LargeSideBarItems Icon={LibraryBig} title="Library" url="/" isActive={false} />
    <LargeSideBarItems Icon={History} title="History" url="/" isActive={false} />
    <LargeSideBarItems Icon={ThumbsUpIcon} title="Like Videos" url="/" isActive={false} />
    <LargeSideBarItems Icon={Watch} title="Watch later" url="/" isActive={false} />
    <LargeSideBarItems Icon={Play} title="Playlist" url="/" isActive={false} />
    <LargeSideBarItems Icon={TrendingUp} title="Trending" url="/" isActive={false} />
    <LargeSideBarItems Icon={Gamepad} title="Gaming" url="/" isActive={false} />
    <LargeSideBarItems Icon={Newspaper} title="News" url="/" isActive={false} />
    <LargeSideBarItems Icon={MoreHorizontal} title="Show more" url="/" isActive={false} />
  </LargeSideBarSection>
</aside>

    </>
  )
}

export default SideBar