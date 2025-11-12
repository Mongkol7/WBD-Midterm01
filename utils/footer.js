function renderFooter() {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-cta">
          <p>PhoneShop - The premier destination for the latest smartphones and accessories in Cambodia. 
          Proudly developed by talented Cambodian developers, we bring you the best technology with local expertise and global standards.</p>
          <a href="/about">Learn more about our story →</a>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h3>Shop and Learn</h3>
            <ul>
              <li><a href="/products">Store</a></li>
              <li><a href="/products/iphone">iPhone</a></li>
              <li><a href="/products/ipad">iPad</a></li>
              <li><a href="/products/mac">Mac</a></li>
              <li><a href="/products/watch">Watch</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/support">PhoneShop Support</a></li>
              <li><a href="/repair">Repair</a></li>
              <li><a href="/trade-in">Trade In</a></li>
              <li><a href="/payment">Payment Options</a></li>
              <li><a href="/business">Business</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Account</h3>
            <ul>
              <li><a href="/account">Manage Your Account</a></li>
              <li><a href="/order">Order Status</a></li>
              <li><a href="/wishlist">Wishlist</a></li>
              <li><a href="/gift-cards">Gift Cards</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>About PhoneShop</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-base">
          <div class="copyright">
            Copyright © ${currentYear} PhoneShop Cambodia. All rights reserved.
          </div>
          <div class="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/sales">Sales Policy</a>
            <a href="/legal">Legal</a>
            <a href="/sitemap">Site Map</a>
          </div>
        </div>
        
        <div class="developers">
          <h3>Proudly Developed By</h3>
          <ul class="developers-list">
            <li>Thoeung Sereymongkol</li>
            <li>Nen Seanghai</li>
            <li>Lim Bunheng</li>
            <li>Sok Rithysak</li>
            <li>Set Kimliza</li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}

module.exports = { renderFooter };
