
import Aside from '../../components/aside'
import NavWidgets from '@/components/widgets/navWidgets'
import Logo from '../../../public/logo-Upac.png'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-white no-scrollbar ">

        {/* Navigation  */}

       <div className="hidden sm:block">
         <Aside is_active={true} />
      </div>

      <div className="flex-1 flex flex-col h-screen overflow-y-auto no-scrollbar">

        
        <header>
            <NavWidgets image={Logo} />
        </header>
        <main className='no-scrollbar'>
          {children}
        </main>
      </div>
    </div>
  )
}
