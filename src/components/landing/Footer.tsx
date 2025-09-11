export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto px-4 pt-12 pb-10 border-y border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-xl">StemFun</div>
            <p className="text-muted-foreground mt-2 text-sm">
              Make animated videos from text
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#pricing"
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="mailto:team@StemFun.video"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://twitter.com/StemFunvideo"
                  className="hover:text-foreground transition-colors"
                >
                  Twitter @StemFunvideo
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/StemFuncreators/"
                  className="hover:text-foreground transition-colors"
                >
                  Instagram @StemFuncreators
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-muted-foreground">
        Copyright © 2025 StemFun LLC. All rights reserved.
      </div>
    </footer>
  );
}
