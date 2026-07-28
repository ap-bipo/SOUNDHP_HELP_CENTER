# SOUNDHP — Privacy Policy & Terms of Service

**Last Updated:** July 28, 2026  
**App Version:** 1.0.0

> By creating an account or using SOUNDHP, you agree to this Privacy Policy and our Terms of Service. If you do not agree, please do not use the app.

---

## 1. Who We Are

SOUNDHP is a voice-based social media application developed by **Phuc Hung** and **An Phuoc**. This policy describes how we collect, use, store, and protect your personal information when you use SOUNDHP.

---

## 2. Information We Collect

### 2.1 Information You Provide

When you create an account or use SOUNDHP, we collect:

- **Account Information:** Your email address, display name, and custom user ID (@handle).
- **Authentication Credentials:** Your password (securely hashed — we never store or see your plain-text password).
- **Profile Media:** Profile avatar photo and background image you choose to upload.
- **Voice Content:** Voice recordings you create and share as posts or private messages.
- **Text Content:** Optional captions you add to your voice posts.

### 2.2 Information Generated Through Use

As you interact with the app, we automatically record:

- **Connection Data:** Your follow/connect relationships with other users.
- **Reactions:** When you react to (like) voice posts.
- **Chat Activity:** Messages you send in private conversations, including audio files and timestamps.
- **Post Visibility Preferences:** Whether your posts are shared with all connected users or specific individuals.

### 2.3 Technical Information

- **Timestamps:** When content is created or updated.
- **Session Data:** Authentication tokens managed by our backend provider to keep you logged in.
- **Audio Duration:** The length of your voice recordings in seconds.

### 2.4 Information We Do NOT Collect

We do **not** collect:

- Your precise or approximate location.
- Your contact list or phone book.
- Biometric data (fingerprint, face scan).
- Browsing history or activity outside the app.
- Financial or payment information.

---

## 3. How We Use Your Information

We use your information to:

- **Provide the Service:** Create and manage your account, display your profile, and deliver your voice posts and messages to your connections.
- **Enable Social Features:** Let you find and connect with other users by name or @handle, manage connection requests, and react to posts.
- **Enforce Visibility Controls:** Respect your preferences on who can see your voice posts (all connections or specific users).
- **Improve Security:** Verify your identity through email OTP codes during sign-up and password recovery.
- **Display Advertisements:** Show relevant native ads through Google AdMob (see Section 6).

---

## 4. Device Permissions

SOUNDHP requests the following device permissions:

| Permission | Why We Need It | When It's Requested |
|---|---|---|
| **Microphone** | To record voice posts and voice messages | Before your first recording; you can deny and grant later in Settings |
| **Photo Library** | To select an avatar or background image from your gallery | When you tap to change your profile or background photo |
| **Internet** | To communicate with our servers | Automatically granted on all platforms |

You can revoke microphone and photo library permissions at any time through your device's system settings. Without microphone access, you will not be able to record audio.

---

## 5. Data Storage & Security

### 5.1 Where Your Data is Stored

All your data is stored and processed through **Supabase**, a cloud backend service. This includes:

- **Database:** Your profile information, post metadata, connections, reactions, and message records.
- **File Storage:** Your audio files (voice posts and messages) and images (avatar and background) are stored in secure cloud storage buckets.
- **Authentication:** Your login credentials are managed by Supabase Auth with industry-standard password hashing.

### 5.2 How We Protect Your Data

- Passwords are **never stored in plain text** — they are cryptographically hashed by our authentication provider.
- Authentication uses **JWT (JSON Web Token)** session management.
- Email verification uses **one-time password (OTP)** codes with rate limiting to prevent abuse.
- Database access is controlled through **Row Level Security (RLS)** policies.

### 5.3 Local Storage

On your device, SOUNDHP stores:

- **Theme Preference:** Your light/dark mode choice (via local preferences).
- **Temporary Audio Files:** Recordings are cached temporarily during playback and deleted when no longer needed.

We do **not** store your credentials, tokens, or sensitive data in unprotected local storage.

---

## 6. Third-Party Services

### 6.1 Google AdMob

We use **Google AdMob** to display advertisements in the app. Google may collect certain data including:

- Device identifiers (advertising ID).
- IP address.
- Ad interaction data (views, clicks).

Google's data practices are governed by the [Google Privacy Policy](https://policies.google.com/privacy). You may opt out of personalized advertising through your device settings:

- **iOS:** Settings → Privacy → Apple Advertising
- **Android:** Settings → Google → Ads

### 6.2 Supabase

We use **Supabase** as our backend-as-a-service provider. Supabase processes your data on our behalf and is subject to the [Supabase Privacy Policy](https://supabase.com/privacy).

---

## 7. Data Sharing

We do **not** sell your personal information to anyone.

We share your data only:

- **With other users**, as directed by you (e.g., voice posts visible to your connections, messages to chat participants, and profile information visible during search).
- **With our service providers** (Supabase for backend infrastructure, Google for advertising), strictly as necessary to operate the app.
- **As required by law**, if compelled by valid legal process.

---

## 8. Your Rights & Controls

### 8.1 Edit Your Profile

You can update your display name, @handle, avatar, and background photo at any time through the Edit Profile page.

### 8.2 Change Your Password

You can change your password through the account settings. We support both old-password verification and email OTP recovery.

### 8.3 Control Post Visibility

Before sharing a voice post, you can choose its audience:

- **All Connected:** Visible to all mutually connected users.
- **Specific Users:** Visible only to selected individuals from your connections.

### 8.4 Delete Your Content

- **Voice Posts:** You can delete any of your voice posts at any time. This removes both the database record and the audio file from storage.
- **Messages:** You can delete individual messages you sent, removing both the record and audio file.
- **Conversations:** You can delete an entire chat conversation, removing the room and all associated data.

### 8.5 Delete Your Account

You may permanently delete your account at any time through the Edit Profile → Account section. Account deletion:

- Removes **all** your data from our systems: profile, voice posts, messages, connections, reactions, avatar, and background images.
- Is **irreversible** — there is no way to recover your data after deletion.
- Requires **two-step confirmation** including typing "DELETE" to prevent accidental deletion.

---

## 9. Data Retention

- **Active Account:** Your data is retained as long as your account exists.
- **Deleted Account:** All data is immediately and permanently removed from our database and file storage upon account deletion.
- **Temporary Files:** Recordings cached on your device are automatically cleaned up after upload or when the recording interface is closed.
- **Replaced Media:** When you update your avatar or background, the previous file is automatically deleted from storage.

---

## 10. Children's Privacy

SOUNDHP is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us so we can delete it.

---

## 11. Open-Source Software

SOUNDHP is built with the help of open-source software libraries. A full list of third-party packages and their licenses is available in the **Open-Source Licenses** document within the app.

---

## 12. Changes to This Policy

We may update this Privacy Policy from time to time. If we make material changes, we will notify you through the app or by other means before the changes take effect. Your continued use of SOUNDHP after changes are posted constitutes your acceptance of the revised policy.

---

## 13. Contact Us

If you have questions about this Privacy Policy or your data, please contact us:

- **Email:** [contact@soundhp.app]
- **Developers:** Phuc Hung & An Phuoc

---

## Terms of Service

### Acceptable Use

By using SOUNDHP, you agree to:

- Provide accurate information during registration.
- Not impersonate other users or create misleading profiles.
- Not upload harmful, illegal, abusive, or inappropriate content.
- Not attempt to disrupt, hack, or reverse-engineer the app or its services.
- Respect other users' privacy and not share their content without permission.

### Content Ownership

- You retain ownership of the voice recordings and media you create and upload.
- By posting content, you grant SOUNDHP a limited, non-exclusive license to store, transmit, and display your content to the intended audience as part of the service.
- You can revoke this license at any time by deleting your content or account.

### Account Termination

We reserve the right to suspend or terminate accounts that violate these terms. You may delete your account at any time through the app settings.

### Disclaimer

SOUNDHP is provided "as is" without warranties of any kind. We do our best to keep the service running and your data safe, but we cannot guarantee uninterrupted service or absolute security.

### Limitation of Liability

To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of SOUNDHP.

---

*Thank you for trusting SOUNDHP with your voice. We are committed to protecting your privacy and providing a safe social experience.*
