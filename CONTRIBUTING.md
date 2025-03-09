# 🚀 Contribution Guidelines for VedEats

Thank you for contributing to VedEats! To ensure a smooth and efficient development process, we follow a structured approach for naming Issues, Pull Requests (PRs), and Commits. This helps maintain clarity, consistency, and traceability across the project.

## 📌 Naming Conventions for Issues & Pull Requests
When creating an Issue or a Pull Request, use *Conventional Commits* formatting to describe your changes concisely. The format follows:


<PREFIX>: <Capitalized concise description>


### 🔖 Allowed Prefixes & Their Usage
Each title must start with one of the following prefixes. Additionally, the first letter after the prefix should be capitalized.

#### *1️⃣ FEAT (Feature)*
Use this when introducing a new feature.
- *Example:* FEAT: Implement user authentication flow

#### *2️⃣ FIX (Bug Fix)*
Use this when fixing a bug or resolving an issue.
- *Example:* FIX: Resolve crash when loading dashboard

#### *3️⃣ DOCS (Documentation)*
Use this for updates to documentation, such as README files, inline comments, or wikis.
- *Example:* DOCS: Update installation guide

#### *4️⃣ STYLE (Code Style & Formatting)*
Use this for non-functional code changes related to style, formatting, linting, etc.
- *Example:* STYLE: Apply consistent code indentation

#### *5️⃣ REFACTOR (Code Restructuring)*
Use this when restructuring code without adding new features or fixing bugs.
- *Example:* REFACTOR: Simplify API request handling

#### *6️⃣ PERF (Performance Improvement)*
Use this when optimizing the application’s performance.
- *Example:* PERF: Optimize image loading for faster page speed

#### *7️⃣ TEST (Testing & Test Cases)*
Use this when adding or modifying test cases.
- *Example:* TEST: Add unit tests for checkout process

#### *8️⃣ BUILD (Build System & Dependencies)*
Use this for changes that affect the build system, dependencies, or package management.
- *Example:* BUILD: Upgrade React to version 18

#### *9️⃣ CHORE (Maintenance & Miscellaneous Tasks)*
Use this for non-functional changes like tool updates, refactoring configurations, or minor script changes.
- *Example:* CHORE: Update ESLint rules

#### *🔟 REVERT (Reverting Commits)*
Use this when undoing a previous commit.
- *Example:* REVERT: Undo header layout changes

---

## ❌ Naming Mistakes to Avoid
Ensure your Issue and PR titles are clear, specific, and informative. Avoid vague or unclear descriptions like:

🚫 Added new feature (What feature was added?)  
🚫 Bug fix (What bug was fixed?)  
🚫 Updated file (Which file? What was updated?)  

✅ Instead, use:
- FEAT: Implement dark mode for the UI
- FIX: Resolve infinite loop in login validation
- DOCS: Add API usage section to README

---

## ✅ Best Practices for Commits
When writing commit messages, use the following structure:

### 🔹 *Commit Message Format*

<PREFIX>: <Short description>

<Optional: Detailed description, if necessary>


### 🔹 *Example Commit Messages*

FEAT: Add social login support

- Implement Google and Facebook authentication
- Update backend to support OAuth flow
- Modify UI for login options


FIX: Correct navigation issue on mobile

- Fix incorrect redirection after login
- Adjust navbar styling for mobile view


### 🔹 *Commit Guidelines*
✅ Keep commit messages concise yet descriptive.  
✅ Use imperative mood ("Add" instead of "Added").  
✅ Break large changes into multiple commits.  
✅ Reference relevant Issue or PR IDs where applicable.  

---

## 🎯 Summary
✅ Use one of the specified prefixes (FEAT, FIX, DOCS, etc.).  
✅ Keep Issue & PR titles concise, capitalized, and meaningful.  
✅ Avoid vague or generic titles.  
✅ Write clear, structured commit messages.  
✅ Reference related Issues/PRs when necessary.  

By following these simple guidelines, we ensure a streamlined and efficient contribution process. Thanks for helping keep VedEats organized and high-quality! 🎉🍽

Happy coding! 🚀