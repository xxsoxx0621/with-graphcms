/** @type {import('next').NextConfig} */
const nextConfig = {
    env   : {
        GRAPHCMS_ENDPOINT: 'https://api-ap-southeast-2.hygraph.com/v2/cletj7b2c2xjo01t9gvknam2b/master',
        GRAPHCMS_API_KEY : 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzc5MDgxNzcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbGV0ajdiMmMyeGpvMDF0OWd2a25hbTJiL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiI1YzM5ZDJlMS1iZTBjLTQ3ZmQtOGY3OS0wMGQ3MjlhZDYzNGUiLCJqdGkiOiJja2x1emJybHA1b2w5MDF4djczMjU4dGpkIn0.4Huo3xLB-Q5l9daByI3Z0ecI6aXLMeqt929cxo2BcPDeuYmxBZBkvpo8bKiVh_LXPrhTGNspP4-fEt-cIxdNTWELDKfEIWrwnrGHjVtsZx8E_jUSein1iqy_PzqEPELkzTjsB-kJII1qUDpFO7UH9Kf6w0DNpQgMgtGA9eSQ1SqTy3-rtnD0YLqb4AinztOcD_dhb8XvtpojNY_iXF89cV3MbwMAgb3-uKgI1baAzDDoFz_3WxwlIR0Ab13_kiVHsZQ0NdGQQrRZXsjRi9Hb1cmU3Zgyq9H2Kvbv1rm0wxJLVjOiyDeiHKu9mKFcTvdTHGo7fDOoFRF8vhWddYR2Wh3PpuJ2Uhn_Vvw-3puh_0ThWuoC0tIDNbKtFsnnv_i97Xlpb4-a78PiuAfML_ZP-adPFYyFZ94U2YvpJmreMS-_hQJMFpC5fJSPZANp38CflXTBp98jxwluvDpbIHb0oc_FFvAoE3myVuLqQB3uEjPz58gNXmckSA_thd08Pza5GFSOHmmdn7wj-ARWPvvigJcntN6t_yInSZzPpFAp7q0rbGILewQk91ig8nLAKY4KqXfKJs296pYW_VCbjnfPl393GfNxzHDgfO9FDTvt7LZCjD_NUN3dznZZDI5CStqWveQyf92oHXz-itVjR45cQjpd9jbdvDAXRzz3avH-f-M',
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ]
    }
}

module.exports = nextConfig
