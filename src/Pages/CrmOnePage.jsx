import React from 'react'
import { Monitor, Headphones, Briefcase } from 'lucide-react'
import { AutoMakeTask, CrmClient, CrmCore, CrmHeroOne, Footer, Header, ServiceItTrade } from '../Componenets'

const CrmOnePage = () => {
  return (
    <>
    {/* header  */}
      <Header />
      {/* main section  */}
      <CrmHeroOne
        title={<>ProcessIQ <span className="text-primary-red">CRM</span> Solutions For Your Business</>}
        description="Powering modern enterprises with intelligent customer relationship management tools designed for scale, deep analytics, and unprecedented efficiency."
        btn1Text="Explore Features"
        btn2Text="Free Consultation"
      />
  {/* crm core  */}
      <CrmCore
        title={(
          <>
            Core Features Of Our <br />
            <span className="relative inline-block mt-2 font-bold">
              Business Platform
            </span>
          </>
        )}
        mainDescription="Discover the essential tools and functionalities designed to optimize your customer management, improve sales efficiency, and enhance overall business performance."
        features={[
          {
            id: 1,
            title: "Managed IT Services",
            description: "Enterprise-grade infrastructure management with 24/7 proactive monitoring and security audits.",
            icon: <Monitor size={40} className="text-white" />
          },
          {
            id: 2,
            title: "Call Center Services",
            description: "Omni-channel customer support solutions designed to enhance satisfaction and brand loyalty.",
            icon: <Headphones size={40} className="text-white" />
          },
          {
            id: 3,
            title: "Global BPO",
            description: "Scalable back-office operations and strategic outsourcing that allows you to focus on core growth.",
            icon: <Briefcase size={40} className="text-white" />
          }
        ]}
      />
      {/* auto make task  */}
      <AutoMakeTask
        title="Automate Workflows To Scale Your Operation Seamlessly"
        description="Gain Precise Insights For Your Business With Our Advanced Analytics Tools. Make Informed Decisions Based On Accurate, Real-Time Data."
        points={[
          "AI-Driven Predictive Insights",
          "Automated Task Scheduling",
          "Cross-Platform Syncing"
        ]}
        btnText="Start Automating"
      />
      {/* service it trade  */}
    <ServiceItTrade/>
    {/* crm client  */}
      <CrmClient />
      {/* footer  */}
      <Footer />
    </>
  )
}

export default CrmOnePage