const presence = new Presence({
  clientId: '1407882334757458080' // You must enter this yourself
})
const mainTimestamp = Math.floor(Date.now() / 1000) // Show elapsed time

enum ActivityAssets {
  Logo = 'https://i.imgur.com/9AZQ67p.png',
}

presence.on('UpdateData', async () => {
  // Get the current URL
  const { pathname } = document.location

  // Create the base presence data
  const presenceData: PresenceData = {
    largeImageKey: ActivityAssets.Logo, // Direct URL to the logo image
    details: '',
    startTimestamp: mainTimestamp // Show elapsed time
  }

  // Update the state based on the current page
  if (pathname === '/') {
    presenceData.state = 'Studying (or am i..)'
  }

  // Set the activity
  if (presenceData.state) {
    presence.setActivity(presenceData)
  }
  else {
    presence.clearActivity()
  }
})