import { Page } from "@playwright/test";

export class LoginPage {
  //   page: Page;

  constructor(private page: Page) {}

  username_textbox = this.page.getByLabel("Username");
  password_textbox = this.page.getByLabel("Password");
  login_button = this.page.getByRole("button", { name: "Login" });

  //   enterUsername() {}

  //   enterPassword() {}

  //   clickOnLogin() {}

  async gotoLoginPage() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  async logic(username: string, password: string) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}
