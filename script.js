// Simulated data for demonstration
var versions = [

  {
    version: "1.12.0",
    type: "beta",
    releaseDate: "March 15, 2024",
    changelog: [
      { icon: "plus-circle", text: "<b>Added:</b> <br> - Search from download history <br> - Search from subtitles in format selection page <br> - Export download history to file/clipboard <br> - Import download history from file/clipboard <br> - Re-download unavailable videos <br> - Download auto-translated subtitles <br> - Remember subtitle selection for next downloads <br> - Configuration for not using the download type in the last download <br> - Haptic feedback BZZZTT!!1!" },
      { icon: "star", text: "<b>Changed:</b> <br> - Long pressing on an item in download history now selects it <br> - Metadata is also added to videos now <br> - A few UI changes that I forgot" },
      { icon: "bug", text: "<b>Fixed:</b> <br> - Fix a permission issue when using Seal in a different user profile or private space <br> - Fix an issue where the text cannot be copied in the menu of the download history" }
    ],
    downloadLink: "https://dropgalaxy.in/50lo7zpmihep" // Example download link
  },

  { 
    version: "1.12.1", 
    type: "stable", 
    releaseDate: "April 10, 2024", 
    changelog: [
      { icon: "plus-circle", text: "<b>Added Features:</b> <br> • Merge multiple audio streams into single file <br> • Allow downloading with cellular network temporarily" }, 
      { icon: "bug", text: "<b>Fixed Bugs:</b> <br> • App creates duplicated command templates on initialization <br> • Cannot make video clip in FormatPage" }, 
      { icon: "star", text: "Improved more gratitude to sponsors" }
    ],
    downloadLink: "https://dropgalaxy.in/i4ywr8lkdezk" // Example download link
  }
];

// Sort versions by version numbers in descending order
versions.sort(function(a, b) {
  return compareVersions(b.version, a.version);
});

// Display all versions initially
displayVersions(versions);

// Event listener for filter buttons
$('.filter-button').click(function() {
  var filterType = $(this).data('filter');
  var filteredVersions = filterVersions(versions, filterType);
  displayVersions(filteredVersions);
});

// Function to compare version numbers
function compareVersions(versionA, versionB) {
  var partsA = versionA.split('.').map(Number);
  var partsB = versionB.split('.').map(Number);
  for (var i = 0; i < partsA.length; i++) {
    if (partsA[i] > partsB[i]) return 1;
    if (partsA[i] < partsB[i]) return -1;
  }
  return 0;
}

// Function to filter versions based on type
function filterVersions(versions, type) {
  if (type === 'all') {
    return versions;
  } else {
    return versions.filter(function(version) {
      return version.type === type;
    });
  }
}

// Function to display versions
function displayVersions(versions) {
  $('#versions-container').empty(); // Clear previous versions

  versions.forEach(function(ver) {
    var cardClass = ver.type === 'stable' ? 'success' : 'warning';
    var badgeText = ver.type === 'stable' ? 'Stable' : 'Beta';
    var changelogList = ver.changelog.map(function(item) {
      var iconColor = getIconColor(item.icon);
      return '<li><i class="fas fa-' + item.icon + ' text-' + iconColor + ' mr-2"></i>' + item.text + '</li>';
    }).join('');
    $('#versions-container').append(
      '<div class="col-md-6 fadeIn">' +
      '<div class="card mb-4 border-' + cardClass + '">' +
      '<div class="card-body">' +
      '<h2 class="card-title h5 mb-3">Version ' + ver.version + '</h2>' +
      '<h3 class="card-subtitle mb-3 text-muted small">Release Date: ' + ver.releaseDate + '</h3>' +
      '<span class="badge badge-' + cardClass + ' mb-2">' + badgeText + '</span>' +
      '<p class="card-text"><i class="fas fa-briefcase mr-2"></i>Changelog:</p>' +
      '<ul class="list-unstyled">' + changelogList + '</ul>' +
      '<a href="' + ver.downloadLink + '" class="btn btn-primary">Download Version ' + ver.version + '</a>' +
      '</div>' +
      '</div>' +
      '</div>'
    );
  });
}

// Function to get the icon color based on the icon type
function getIconColor(icon) {
  var colorMap = {
    "plus-circle": "success",
    "bug": "danger",
    "star": "warning"
  };
  return colorMap[icon] || "secondary";
}
