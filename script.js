        $(document).ready(function() {
          // Simulated data for demonstration
          var versions = [
            { version: "1.0", type: "stable" },
            { version: "2.0", type: "stable" },
            { version: "3.0", type: "beta" },
            { version: "4.0", type: "stable" }
            ];

          displayVersions(versions); // Display all versions initially

          // Event listener for filter buttons
          $('.filter-button').click(function() {
            var filterType = $(this).data('filter');
            var filteredVersions = filterVersions(versions, filterType);
            displayVersions(filteredVersions);
          });

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
              $('#versions-container').append(
                '<div class="col-md-6 fadeIn">' +
                '<div class="card mb-4 border-' + cardClass + '">' +
                '<div class="card-body">' +
                '<h2 class="card-title h5 mb-3">Version ' + ver.version + '</h2>' +
                '<h3 class="card-subtitle mb-3 text-muted small">Release Date: March 10, 2024</h3>' +
                '<span class="badge badge-' + cardClass + ' mb-2">' + badgeText + '</span>' +
                '<p class="card-text"><i class="fas fa-briefcase mr-2"></i>Changelog:</p>' +
                '<ul class="list-unstyled">' +
                '<li><i class="fas fa-plus-circle text-success mr-2"></i>Added feature C</li>' +
                '<li><i class="fas fa-bug text-danger mr-2"></i>Fixed bug D</li>' +
                '<li><i class="fas fa-star text-warning mr-2"></i>Enhanced user interface</li>' +
                '</ul>' +
                '<a href="#" class="btn btn-primary">' + 'Download Version ' + ver.version + '</a>' +
                '</div>' +
                '</div>' +
                '</div>'
              );
            });
          }
        });
