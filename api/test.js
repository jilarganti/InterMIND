// @ts-check

/**
 * @param {{ method: string; body: string; }} req
 * @param {{ status: (arg0: number) => { (): any; new (): any; json: { (arg0: { message: string; }): void; new (): any; }; }; }} res
 */
export default function handler(req, res) {
  try {
    res.status(200).json({ message: "API работает" + req.method + req.body })
  } catch (error) {
    console.error("Error in handler:", error)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
