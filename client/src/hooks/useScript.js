import { useEffect } from "react"

const useScript = (url, integrity, type = "text/javascript", async = true, crossOrigin = "anonymous") => {

  useEffect(() => {
    const script = document.createElement("script")

    script.src = url

    script.async = async

    if (integrity) {
      script.integrity = integrity
    }

    script.type = type
    script.crossOrigin = crossOrigin

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url, integrity, type, async, crossOrigin])
}

export default useScript