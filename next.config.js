/** @type {import('next').NextConfig} */
const nextConfig = {
      async headers(){
        return[
            {
                source:'/:path*',
                headers:[
                    {
                        key:'referrer-policy',
                        value:'referrer-policy'
                        
                    }
                ]
            }
        ]
      }
}

module.exports = nextConfig
