// Shared sidebar renderer: works from file:// and http(s)
(function() {
	const navConfig = {
		title: 'ML Tools',
		sections: [
			{
				header: 'Dashboard',
				subsections: [
					{
						title: 'Dashboard',
						links: [
							{ label: 'Overview', href: makeRelativePath('Clustering/main.html') }
						]
					}
				]
			},
			{
				header: 'Clustering Methods',
				categories: [
					{
						title: 'Density Based',
						subsections: [
							{
								title: 'DBSCAN',
								links: [
									{ label: 'Overview', href: makeRelativePath('Clustering/DBSCAN_Overview.html') },
									{ label: '2D DBSCAN', href: makeRelativePath('Clustering/DBSCAN.html') },
									{ label: '3D DBSCAN', href: makeRelativePath('Clustering/DBSCAN3D.html') }
								]
							},
							{
								title: 'Hierarchical DBSCAN',
								links: [
									{ label: 'Overview', href: makeRelativePath('Clustering/HDBSCAN_Overview.html') },
									{ label: '2D HDBSCAN', href: makeRelativePath('Clustering/HierarchicalDBSCAN.html') },
									{ label: '3D HDBSCAN', href: makeRelativePath('Clustering/HierarchicalDBSCAN3D.html') }
								]
							},
							{
								title: 'OPTICS',
								links: [
									{ label: 'Overview', href: makeRelativePath('Clustering/OPTICS_Overview.html') },
									{ label: '2D OPTICS', href: makeRelativePath('Clustering/OPTICS.html') },
									{ label: '3D OPTICS', href: makeRelativePath('Clustering/OPTICS3D.html') }
								]
							},
							{
								title: 'DENCLUE',
								links: [
									{ label: 'Overview', href: makeRelativePath('Clustering/DENCLUE_Overview.html') },
									{ label: '2D DENCLUE', href: makeRelativePath('Clustering/DENCLUE.html') },
									{ label: '3D DENCLUE', href: makeRelativePath('Clustering/DENCLUE3D.html') }
								]
							}
						]
					},
					{
						title: 'Partitioning',
						subcategories: [
							{
								title: 'Centroid-Based Partitioning',
								subsections: [
									{
										title: 'K-means',
										links: [
											{ label: 'Overview', href: makeRelativePath('Clustering/K-means_Overview.html') },
											{ label: '2D K-means', href: makeRelativePath('Clustering/K-means.html') },
											{ label: '3D K-means', href: makeRelativePath('Clustering/K-means3D.html') }
										]
									},
									{
										title: 'K-Medoids',
										links: [
											{ label: 'Overview', href: makeRelativePath('Clustering/K-Medoids_Overview.html') },
											{ label: '2D K-Medoids', href: makeRelativePath('Clustering/K-Medoids.html') },
											{ label: '3D K-Medoids', href: makeRelativePath('Clustering/K-Medoids3D.html') }
										]
									},
									{
										title: 'K-modes',
										links: [
											{ label: 'Overview', href: makeRelativePath('Clustering/K-modes_Overview.html') },
											{ label: '2 Features', href: makeRelativePath('Clustering/K-modes.html') },
											{ label: '3 Features', href: makeRelativePath('Clustering/K-modes3D.html') }
										]
									}
								]
							},
							{
								title: 'Model-Based Partitioning',
								subsections: [
									{
										title: 'EM Algorithm',
										links: [
											{ label: 'Overview', href: makeRelativePath('Clustering/EM_Overview.html') },
											{ label: '2D EM', href: makeRelativePath('Clustering/EM.html') },
											{ label: '3D EM', href: makeRelativePath('Clustering/EM3D.html') }
										]
									},
									{
										title: 'GMM',
										links: [
											{ label: 'Overview', href: makeRelativePath('Clustering/GMM_Overview.html') },
											{ label: '2D GMM', href: makeRelativePath('Clustering/GMM.html') },
											{ label: '3D GMM', href: makeRelativePath('Clustering/GMM3D.html') }
										]
									}
								]
							},
							{
								title: 'Graph-Based Partitioning',
								subsections: [
									{
										title: 'Spectral Clustering',
										links: [
											{ label: 'Overview', href: makeRelativePath('Clustering/Spectral_Overview.html') },
											{ label: '2D Spectral', href: makeRelativePath('Clustering/Spectral.html') },
											{ label: '3D Spectral', href: makeRelativePath('Clustering/Spectral3D.html') }
										]
									},
									{
										title: 'Louvain Method',
										links: [
											{ label: 'Overview', href: makeRelativePath('Clustering/Louvain_Overview.html') },
											{ label: '2D Louvain', href: makeRelativePath('Clustering/Louvain.html') },
											{ label: '3D Louvain', href: makeRelativePath('Clustering/Louvain3D.html') }
										]
									},
									{
										title: 'Girvan-Newman',
										links: [
											{ label: 'Overview', href: makeRelativePath('Clustering/Girvan-Newman_Overview.html') },
											{ label: '2D Girvan-Newman', href: makeRelativePath('Clustering/Girvan-Newman.html') }
										]
									},
									{
										title: 'Label Propagation',
										links: [
											{ label: 'Overview', href: makeRelativePath('Clustering/Label_Propagation_Overview.html') },
											{ label: '2D Label Propagation', href: makeRelativePath('Clustering/Label_Propagation.html') },
											{ label: '3D Label Propagation', href: makeRelativePath('Clustering/Label_Propagation3D.html') }
										]
									}
								]
							}
						]
					},
					{
						title: 'Hierarchical',
						subsections: [
							{
								title: 'Single Linkage',
								links: [
									{ label: 'Overview', href: makeRelativePath('Clustering/Single_Linkage_Overview.html') },
									{ label: '2D Single Linkage', href: makeRelativePath('Clustering/Single_Linkage.html') },
									{ label: '3D Single Linkage', href: makeRelativePath('Clustering/Single_Linkage3D.html') }
								]
							},
							{
								title: 'Complete Linkage',
								links: [
									{ label: 'Overview', href: makeRelativePath('Clustering/Complete_Linkage_Overview.html') },
									{ label: '2D Complete Linkage', href: makeRelativePath('Clustering/Complete_Linkage.html') },
									{ label: '3D Complete Linkage', href: makeRelativePath('Clustering/Complete_Linkage3D.html') }
								]
							},
							{
								title: 'Average Linkage',
								links: [
									{ label: 'Overview', href: makeRelativePath('Clustering/Average_Linkage_Overview.html') },
									{ label: '2D Average Linkage', href: makeRelativePath('Clustering/Average_Linkage.html') },
									{ label: '3D Average Linkage', href: makeRelativePath('Clustering/Average_Linkage3D.html') }
								]
							},
							{
								title: "Ward's Method",
								links: [
									{ label: 'Overview', href: makeRelativePath('Clustering/Ward_Method_Overview.html') },
									{ label: "2D Ward's Method", href: makeRelativePath('Clustering/Ward_Method.html') },
									{ label: "3D Ward's Method", href: makeRelativePath('Clustering/Ward_Method3D.html') }
								]
							}
						]
					}
				]
			}
		]
	};

	function getFileName(path) {
		try {
			const url = new URL(path, window.location.href);
			return url.pathname.split('/').pop() || 'index.html';
		} catch (e) {
			// Fallback for file:// without proper URL parsing in some contexts
			const p = (path || '').toString();
			const parts = p.split(/[\\\/]/);
			return parts[parts.length - 1] || 'index.html';
		}
	}

	function getCurrentFolder() {
		const pathParts = window.location.pathname.split('/').filter(p => p);
		if (pathParts.length > 1) {
			const folder = pathParts[pathParts.length - 2];
			if (folder === 'Clustering' || folder === 'Anomaly_Detection' || folder === 'Dimensionality_Reduction') {
				return folder;
			}
		}
		return null;
	}

	function makeRelativePath(targetPath) {
		const currentFolder = getCurrentFolder();
		if (!currentFolder) {
			// We're at root, return path as-is
			return targetPath;
		}
		
		// Extract folder and filename from targetPath
		const parts = targetPath.split('/');
		if (parts.length === 1) {
			// Just filename, same folder
			return targetPath;
		}
		
		const targetFolder = parts[0];
		const filename = parts[1];
		
		if (targetFolder === currentFolder) {
			// Same folder, just return filename
			return filename;
		} else {
			// Different folder, use relative path
			return '../' + targetPath;
		}
	}

	function renderSidebar(container) {
		const current = getFileName(window.location.pathname);
		let html = '';
		
		// Add "Back to Unsupervised Learning" link for all pages
		// Determine if we're in a subfolder and adjust path accordingly
		const pathParts = window.location.pathname.split('/').filter(p => p);
		const isInSubfolder = pathParts.length > 1 && (pathParts[pathParts.length - 2] === 'Clustering' || pathParts[pathParts.length - 2] === 'Anomaly_Detection' || pathParts[pathParts.length - 2] === 'Dimensionality_Reduction');
		const backLink = isInSubfolder ? '../index.html' : 'index.html';
		html += '<a href="' + backLink + '" class="nav-item" style="display: block; margin-bottom: 20px; background-color: rgba(221,132,72,0.15); border: 1px solid rgba(221,132,72,0.4); color: #ffb07a; text-align: center; font-weight: 600;">';
		html += '← Back to Unsupervised Learning';
		html += '</a>';
		
		// Check if we're on an Anomaly Detection page
		const isAnomalyDetectionPage = current.includes('Mahalanobis') || current.includes('kNN') || current.includes('LOF') || current.includes('LOCI') || current.includes('Isolation_Forest') || current.includes('Feature_Bagging') || (current.includes('Autoencoder') && !current.includes('Autoencoders_DR') && !current.includes('SparseAutoencoders')) || (current.includes('VAE') && !current.includes('VAE_DR')) || current.includes('GAN') || current.includes('GMM_Anomaly') || current === 'GMM_Overview.html' || current.includes('Bayesian_Network') || current === 'Anomaly_Detection.html';
		
		if (isAnomalyDetectionPage) {
			// Render Anomaly Detection sidebar
			// Add Anomaly Detection Overview link
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Anomaly_Detection.html') + '" class="nav-item' + (current === 'Anomaly_Detection.html' ? ' active' : '') + '">Overview</a>';
			
			html += '<div class="nav-subheader category-header" data-key="distance"><span>Distance-based</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="distance-content">';
			html += '<div class="nav-subheader" data-key="mahalanobis"><span>Mahalanobis Distance</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="mahalanobis-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Mahalanobis_Distance_Overview.html') + '" class="nav-item sub' + (current === 'Mahalanobis_Distance_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Mahalanobis_Distance.html') + '" class="nav-item sub' + (current === 'Mahalanobis_Distance.html' ? ' active' : '') + '">2D Mahalanobis</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Mahalanobis_Distance3D.html') + '" class="nav-item sub' + (current === 'Mahalanobis_Distance3D.html' ? ' active' : '') + '">3D Mahalanobis</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="knn"><span>kNN Distance</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="knn-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/kNN_Distance_Overview.html') + '" class="nav-item sub' + (current === 'kNN_Distance_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/kNN_Distance.html') + '" class="nav-item sub' + (current === 'kNN_Distance.html' ? ' active' : '') + '">2D kNN</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/kNN_Distance3D.html') + '" class="nav-item sub' + (current === 'kNN_Distance3D.html' ? ' active' : '') + '">3D kNN</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="density"><span>Density-based</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="density-content">';
			html += '<div class="nav-subheader" data-key="lof"><span>Local Outlier Factor (LOF)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="lof-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/LOF_Overview.html') + '" class="nav-item sub' + (current === 'LOF_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/LOF.html') + '" class="nav-item sub' + (current === 'LOF.html' ? ' active' : '') + '">2D LOF</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/LOF3D.html') + '" class="nav-item sub' + (current === 'LOF3D.html' ? ' active' : '') + '">3D LOF</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="loci"><span>LOCI (Local Correlation Integral)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="loci-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/LOCI_Overview.html') + '" class="nav-item sub' + (current === 'LOCI_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/LOCI.html') + '" class="nav-item sub' + (current === 'LOCI.html' ? ' active' : '') + '">2D LOCI</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/LOCI3D.html') + '" class="nav-item sub' + (current === 'LOCI3D.html' ? ' active' : '') + '">3D LOCI</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="ensemble"><span>Ensemble Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="ensemble-content">';
			html += '<div class="nav-subheader" data-key="isolation-forest"><span>Isolation Forest</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="isolation-forest-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Isolation_Forest_Overview.html') + '" class="nav-item sub' + (current === 'Isolation_Forest_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Isolation_Forest.html') + '" class="nav-item sub' + (current === 'Isolation_Forest.html' ? ' active' : '') + '">2D Isolation Forest</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Isolation_Forest3D.html') + '" class="nav-item sub' + (current === 'Isolation_Forest3D.html' ? ' active' : '') + '">3D Isolation Forest</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="feature-bagging"><span>Feature Bagging</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="feature-bagging-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Feature_Bagging_Overview.html') + '" class="nav-item sub' + (current === 'Feature_Bagging_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Feature_Bagging.html') + '" class="nav-item sub' + (current === 'Feature_Bagging.html' ? ' active' : '') + '">2D Feature Bagging</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Feature_Bagging3D.html') + '" class="nav-item sub' + (current === 'Feature_Bagging3D.html' ? ' active' : '') + '">3D Feature Bagging</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="neural"><span>Neural Networks</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="neural-content">';
			html += '<div class="nav-subheader" data-key="autoencoder"><span>Autoencoder</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="autoencoder-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Autoencoder_Overview.html') + '" class="nav-item sub' + (current === 'Autoencoder_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Autoencoder.html') + '" class="nav-item sub' + (current === 'Autoencoder.html' ? ' active' : '') + '">2D Autoencoder</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Autoencoder3D.html') + '" class="nav-item sub' + (current === 'Autoencoder3D.html' ? ' active' : '') + '">3D Autoencoder</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="vae"><span>Variational Autoencoder (VAE)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="vae-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/VAE_Overview.html') + '" class="nav-item sub' + (current === 'VAE_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/VAE.html') + '" class="nav-item sub' + (current === 'VAE.html' ? ' active' : '') + '">2D VAE</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/VAE3D.html') + '" class="nav-item sub' + (current === 'VAE3D.html' ? ' active' : '') + '">3D VAE</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="gan"><span>Generative Adversarial Network (GAN)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="gan-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/GAN_Overview.html') + '" class="nav-item sub' + (current === 'GAN_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/GAN.html') + '" class="nav-item sub' + (current === 'GAN.html' ? ' active' : '') + '">2D GAN</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/GAN3D.html') + '" class="nav-item sub' + (current === 'GAN3D.html' ? ' active' : '') + '">3D GAN</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="probabilistic"><span>Probabilistic Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="probabilistic-content">';
			html += '<div class="nav-subheader" data-key="gmm"><span>Gaussian Mixture Model (GMM)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="gmm-content">';
			html += '<a href="' + makeRelativePath('Clustering/GMM_Overview.html') + '" class="nav-item sub' + (current === 'GMM_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/GMM_Anomaly.html') + '" class="nav-item sub' + (current === 'GMM_Anomaly.html' ? ' active' : '') + '">2D GMM</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/GMM_Anomaly3D.html') + '" class="nav-item sub' + (current === 'GMM_Anomaly3D.html' ? ' active' : '') + '">3D GMM</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="bayesian-network"><span>Bayesian Network</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="bayesian-network-content">';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Bayesian_Network_Overview.html') + '" class="nav-item sub' + (current === 'Bayesian_Network_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Bayesian_Network.html') + '" class="nav-item sub' + (current === 'Bayesian_Network.html' ? ' active' : '') + '">2D Bayesian Network</a>';
			html += '<a href="' + makeRelativePath('Anomaly_Detection/Bayesian_Network3D.html') + '" class="nav-item sub' + (current === 'Bayesian_Network3D.html' ? ' active' : '') + '">3D Bayesian Network</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			container.innerHTML = html;
			attachSidebarBehavior(container);
			return;
		}
		
		// Check if we're on a Dimensionality Reduction page (including Feature Selection pages)
		const isDimensionalityReductionPage = current === 'Dimensionality_Reduction.html' || current === 'PCA_Overview.html' || current === 'PCA.html' || current === 'LDA_Overview.html' || current === 'LDA.html' || current === 'LDA_ClassAware_Overview.html' || current === 'LDA_ClassAware.html' || current.includes('LDA_ClassAware') || current === 'CCA_ClassAware_Overview.html' || current === 'CCA_ClassAware.html' || current.includes('CCA_ClassAware') || current === 'SPCA_ClassAware_Overview.html' || current === 'SPCA_ClassAware.html' || current.includes('SPCA_ClassAware') || current === 'LMNN_MetricLearning_Overview.html' || current === 'LMNN_MetricLearning.html' || current.includes('LMNN_MetricLearning') || current === 'NCA_MetricLearning_Overview.html' || current === 'NCA_MetricLearning.html' || current.includes('NCA_MetricLearning') || current === 'SparsePCA_Overview.html' || current === 'SparsePCA.html' || current.includes('SparsePCA') || current === 'SparseAutoencoders_Overview.html' || current === 'SparseAutoencoders.html' || current.includes('SparseAutoencoders') || current === 'SparseRandomProjections_Overview.html' || current === 'SparseRandomProjections.html' || current.includes('SparseRandomProjections') || current === 'Factor_Analysis_Overview.html' || current === 'Factor_Analysis.html' || current === 'Random_Projections_Overview.html' || current === 'Random_Projections.html' || current === 'SVD_Overview.html' || current === 'SVD.html' || current === 'NMF_Overview.html' || current === 'NMF.html' || current === 'ICA_Overview.html' || current === 'ICA.html' || current === 'Autoencoders_DR_Overview.html' || current === 'Autoencoders_DR.html' || current === 'VAE_DR_Overview.html' || current === 'VAE_DR.html' || current === 'SOM_DR_Overview.html' || current === 'SOM_DR.html' || current === 'Isomap_DR_Overview.html' || current === 'Isomap_DR.html' || current === 'LLE_DR_Overview.html' || current === 'LLE_DR.html' || current === 'Laplacian_Eigenmaps_DR_Overview.html' || current === 'Laplacian_Eigenmaps_DR.html' || current === 'Hessian_LLE_DR_Overview.html' || current === 'Hessian_LLE_DR.html' || current === 'Kernel_PCA_DR_Overview.html' || current === 'Kernel_PCA_DR.html' || current === 'Spectral_Embedding_DR_Overview.html' || current === 'Spectral_Embedding_DR.html' || current === 't-SNE_DR_Overview.html' || current === 't-SNE_DR.html' || current === 'UMAP_DR_Overview.html' || current === 'UMAP_DR.html' || current === 'Probabilistic_PCA_Overview.html' || current === 'Probabilistic_PCA.html' || current.includes('Probabilistic_PCA') || current === 'GPLVM_Overview.html' || current === 'GPLVM.html' || current.includes('GPLVM') || current === 'MDS_Overview.html' || current === 'MDS.html' || current.includes('MDS') || current === 'Non_metric_MDS_Overview.html' || current === 'Non_metric_MDS.html' || current.includes('Non_metric_MDS') || current === 'TDA_Overview.html' || current === 'TDA.html' || current.includes('TDA') || current === 'Persistent_Homology_Overview.html' || current === 'Persistent_Homology.html' || current.includes('Persistent_Homology') || current === 'Mapper_Overview.html' || current === 'Mapper.html' || current.includes('Mapper') || current === 'Variance_Threshold.html' || current === 'Variance_Threshold_Overview.html' || current.includes('Variance_Threshold') || current === 'Correlation_Based.html' || current === 'Correlation_Based_Overview.html' || current.includes('Correlation_Based') || current === 'Mutual_Information.html' || current === 'Mutual_Information_Overview.html' || current.includes('Mutual_Information') || current === 'Forward_Selection.html' || current === 'Forward_Selection_Overview.html' || current.includes('Forward_Selection') || current === 'Backward_Elimination.html' || current === 'Backward_Elimination_Overview.html' || current.includes('Backward_Elimination') || current === 'RFE.html' || current === 'RFE_Overview.html' || current.includes('RFE') || current === 'Lasso.html' || current === 'Lasso_Overview.html' || current.includes('Lasso') || current === 'Decision_Tree_Importance.html' || current === 'Decision_Tree_Importance_Overview.html' || current.includes('Decision_Tree_Importance') || current === 'Random_Forest_Importance.html' || current === 'Random_Forest_Importance_Overview.html' || current.includes('Random_Forest_Importance');
		
		if (isDimensionalityReductionPage) {
			// Render Dimensionality Reduction sidebar
			// Add Dimensionality Reduction Overview link
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Dimensionality_Reduction.html') + '" class="nav-item' + (current === 'Dimensionality_Reduction.html' ? ' active' : '') + '">Overview</a>';
			
			html += '<div class="nav-subheader category-header" data-key="linear"><span>Linear Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="linear-content">';
			html += '<div class="nav-subheader subcategory-header" data-key="projection-based"><span>Projection-Based</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="projection-based-content">';
			html += '<div class="nav-subheader" data-key="pca"><span>PCA</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="pca-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/PCA_Overview.html') + '" class="nav-item sub' + (current === 'PCA_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/PCA.html') + '" class="nav-item sub' + (current === 'PCA.html' ? ' active' : '') + '">PCA Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="lda"><span>LDA</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="lda-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/LDA_Overview.html') + '" class="nav-item sub' + (current === 'LDA_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/LDA.html') + '" class="nav-item sub' + (current === 'LDA.html' ? ' active' : '') + '">LDA Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="factor-analysis"><span>Factor Analysis</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="factor-analysis-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Factor_Analysis_Overview.html') + '" class="nav-item sub' + (current === 'Factor_Analysis_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Factor_Analysis.html') + '" class="nav-item sub' + (current === 'Factor_Analysis.html' ? ' active' : '') + '">Factor Analysis Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="random-projections"><span>Random Projections</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="random-projections-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Random_Projections_Overview.html') + '" class="nav-item sub' + (current === 'Random_Projections_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Random_Projections.html') + '" class="nav-item sub' + (current === 'Random_Projections.html' ? ' active' : '') + '">Random Projections Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '<div class="nav-subheader subcategory-header" data-key="matrix-factorization"><span>Matrix Factorization</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="matrix-factorization-content">';
			html += '<div class="nav-subheader" data-key="svd"><span>SVD</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="svd-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SVD_Overview.html') + '" class="nav-item sub' + (current === 'SVD_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SVD.html') + '" class="nav-item sub' + (current === 'SVD.html' ? ' active' : '') + '">SVD Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="nmf"><span>NMF</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="nmf-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/NMF_Overview.html') + '" class="nav-item sub' + (current === 'NMF_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/NMF.html') + '" class="nav-item sub' + (current === 'NMF.html' ? ' active' : '') + '">NMF Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="ica"><span>ICA</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="ica-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/ICA_Overview.html') + '" class="nav-item sub' + (current === 'ICA_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/ICA.html') + '" class="nav-item sub' + (current === 'ICA.html' ? ' active' : '') + '">ICA Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="nonlinear"><span>Non-Linear Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="nonlinear-content">';
			html += '<div class="nav-subheader subcategory-header" data-key="manifold-learning"><span>Manifold Learning</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="manifold-learning-content">';
			html += '<div class="nav-subheader" data-key="isomap-dr"><span>Isomap</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="isomap-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Isomap_DR_Overview.html') + '" class="nav-item sub' + (current === 'Isomap_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Isomap_DR.html') + '" class="nav-item sub' + (current === 'Isomap_DR.html' ? ' active' : '') + '">Isomap Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="lle-dr"><span>Locally Linear Embedding (LLE)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="lle-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/LLE_DR_Overview.html') + '" class="nav-item sub' + (current === 'LLE_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/LLE_DR.html') + '" class="nav-item sub' + (current === 'LLE_DR.html' ? ' active' : '') + '">LLE Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="laplacian-eigenmaps-dr"><span>Laplacian Eigenmaps</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="laplacian-eigenmaps-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Laplacian_Eigenmaps_DR_Overview.html') + '" class="nav-item sub' + (current === 'Laplacian_Eigenmaps_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Laplacian_Eigenmaps_DR.html') + '" class="nav-item sub' + (current === 'Laplacian_Eigenmaps_DR.html' ? ' active' : '') + '">Laplacian Eigenmaps Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="hessian-lle-dr"><span>Hessian LLE</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="hessian-lle-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Hessian_LLE_DR_Overview.html') + '" class="nav-item sub' + (current === 'Hessian_LLE_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Hessian_LLE_DR.html') + '" class="nav-item sub' + (current === 'Hessian_LLE_DR.html' ? ' active' : '') + '">Hessian LLE Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '<div class="nav-subheader subcategory-header" data-key="neural-network-based"><span>Neural Network-Based</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="neural-network-based-content">';
			html += '<div class="nav-subheader" data-key="autoencoders-dr"><span>Autoencoders</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="autoencoders-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Autoencoders_DR_Overview.html') + '" class="nav-item sub' + (current === 'Autoencoders_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Autoencoders_DR.html') + '" class="nav-item sub' + (current === 'Autoencoders_DR.html' ? ' active' : '') + '">Autoencoders Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="vae-dr"><span>Variational Autoencoder (VAE)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="vae-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/VAE_DR_Overview.html') + '" class="nav-item sub' + (current === 'VAE_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/VAE_DR.html') + '" class="nav-item sub' + (current === 'VAE_DR.html' ? ' active' : '') + '">VAE Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="som-dr"><span>Self-Organizing Maps (SOM)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="som-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SOM_DR_Overview.html') + '" class="nav-item sub' + (current === 'SOM_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SOM_DR.html') + '" class="nav-item sub' + (current === 'SOM_DR.html' ? ' active' : '') + '">SOM Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '<div class="nav-subheader subcategory-header" data-key="kernel-methods"><span>Kernel Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="kernel-methods-content">';
			html += '<div class="nav-subheader" data-key="kernel-pca-dr"><span>Kernel PCA</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="kernel-pca-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Kernel_PCA_DR_Overview.html') + '" class="nav-item sub' + (current === 'Kernel_PCA_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Kernel_PCA_DR.html') + '" class="nav-item sub' + (current === 'Kernel_PCA_DR.html' ? ' active' : '') + '">Kernel PCA Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="spectral-embedding-dr"><span>Spectral Embedding</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="spectral-embedding-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Spectral_Embedding_DR_Overview.html') + '" class="nav-item sub' + (current === 'Spectral_Embedding_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Spectral_Embedding_DR.html') + '" class="nav-item sub' + (current === 'Spectral_Embedding_DR.html' ? ' active' : '') + '">Spectral Embedding Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="probabilistic-dr"><span>Probabilistic Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="probabilistic-dr-content">';
			html += '<div class="nav-subheader subcategory-header" data-key="sne-family"><span>Stochastic Neighbor Embedding Family</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="sne-family-content">';
			html += '<div class="nav-subheader" data-key="tsne-dr"><span>t-SNE</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="tsne-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/t-SNE_DR_Overview.html') + '" class="nav-item sub' + (current === 't-SNE_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/t-SNE_DR.html') + '" class="nav-item sub' + (current === 't-SNE_DR.html' ? ' active' : '') + '">t-SNE Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="umap-dr"><span>UMAP</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="umap-dr-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/UMAP_DR_Overview.html') + '" class="nav-item sub' + (current === 'UMAP_DR_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/UMAP_DR.html') + '" class="nav-item sub' + (current === 'UMAP_DR.html' ? ' active' : '') + '">UMAP Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '<div class="nav-subheader subcategory-header" data-key="generative-models"><span>Generative Models</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="generative-models-content">';
			html += '<div class="nav-subheader" data-key="probabilistic-pca"><span>Probabilistic PCA</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="probabilistic-pca-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Probabilistic_PCA_Overview.html') + '" class="nav-item sub' + (current === 'Probabilistic_PCA_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Probabilistic_PCA.html') + '" class="nav-item sub' + (current === 'Probabilistic_PCA.html' ? ' active' : '') + '">Probabilistic PCA Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="gplvm"><span>Gaussian Process Latent Variable Models (GPLVM)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="gplvm-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/GPLVM_Overview.html') + '" class="nav-item sub' + (current === 'GPLVM_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/GPLVM.html') + '" class="nav-item sub' + (current === 'GPLVM.html' ? ' active' : '') + '">GPLVM Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="feature-selection"><span>Feature Selection Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="feature-selection-content">';
			html += '<div class="nav-subheader subcategory-header" data-key="filter-methods"><span>Filter Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="filter-methods-content">';
			html += '<div class="nav-subheader" data-key="variance-threshold"><span>Variance Threshold</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="variance-threshold-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Variance_Threshold_Overview.html') + '" class="nav-item sub' + (current === 'Variance_Threshold_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Variance_Threshold.html') + '" class="nav-item sub' + (current === 'Variance_Threshold.html' ? ' active' : '') + '">Variance Threshold Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="correlation-based"><span>Correlation-based</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="correlation-based-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Correlation_Based_Overview.html') + '" class="nav-item sub' + (current === 'Correlation_Based_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Correlation_Based.html') + '" class="nav-item sub' + (current === 'Correlation_Based.html' ? ' active' : '') + '">Correlation-based Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="mutual-information"><span>Mutual Information</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="mutual-information-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Mutual_Information_Overview.html') + '" class="nav-item sub' + (current === 'Mutual_Information_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Mutual_Information.html') + '" class="nav-item sub' + (current === 'Mutual_Information.html' ? ' active' : '') + '">Mutual Information Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '<div class="nav-subheader subcategory-header" data-key="wrapper-methods"><span>Wrapper Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="wrapper-methods-content">';
			html += '<div class="nav-subheader" data-key="forward-selection"><span>Forward Selection</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="forward-selection-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Forward_Selection_Overview.html') + '" class="nav-item sub' + (current === 'Forward_Selection_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Forward_Selection.html') + '" class="nav-item sub' + (current === 'Forward_Selection.html' ? ' active' : '') + '">Forward Selection Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="backward-elimination"><span>Backward Elimination</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="backward-elimination-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Backward_Elimination_Overview.html') + '" class="nav-item sub' + (current === 'Backward_Elimination_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Backward_Elimination.html') + '" class="nav-item sub' + (current === 'Backward_Elimination.html' ? ' active' : '') + '">Backward Elimination Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="rfe"><span>Recursive Feature Elimination (RFE)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="rfe-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/RFE_Overview.html') + '" class="nav-item sub' + (current === 'RFE_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/RFE.html') + '" class="nav-item sub' + (current === 'RFE.html' ? ' active' : '') + '">RFE Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '<div class="nav-subheader subcategory-header" data-key="embedded-methods"><span>Embedded Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="embedded-methods-content">';
			html += '<div class="nav-subheader" data-key="lasso"><span>Lasso (L1 Regularization)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="lasso-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Lasso_Overview.html') + '" class="nav-item sub' + (current === 'Lasso_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Lasso.html') + '" class="nav-item sub' + (current === 'Lasso.html' ? ' active' : '') + '">Lasso Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="decision-tree-importance"><span>Decision Tree Importance</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="decision-tree-importance-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Decision_Tree_Importance_Overview.html') + '" class="nav-item sub' + (current === 'Decision_Tree_Importance_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Decision_Tree_Importance.html') + '" class="nav-item sub' + (current === 'Decision_Tree_Importance.html' ? ' active' : '') + '">Decision Tree Importance Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="random-forest-importance"><span>Random Forest Feature Importance</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="random-forest-importance-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Random_Forest_Importance_Overview.html') + '" class="nav-item sub' + (current === 'Random_Forest_Importance_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Random_Forest_Importance.html') + '" class="nav-item sub' + (current === 'Random_Forest_Importance.html' ? ' active' : '') + '">Random Forest Importance Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="geometric"><span>Geometric & Topological Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="geometric-content">';
			html += '<div class="nav-subheader subcategory-header" data-key="mds"><span>Multidimensional Scaling (MDS)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="mds-content">';
			html += '<div class="nav-subheader" data-key="classical-mds"><span>Classical MDS</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="classical-mds-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/MDS_Overview.html') + '" class="nav-item sub' + (current === 'MDS_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/MDS.html') + '" class="nav-item sub' + (current === 'MDS.html' ? ' active' : '') + '">Classical MDS Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="non-metric-mds"><span>Non-metric MDS</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="non-metric-mds-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Non_metric_MDS_Overview.html') + '" class="nav-item sub' + (current === 'Non_metric_MDS_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Non_metric_MDS.html') + '" class="nav-item sub' + (current === 'Non_metric_MDS.html' ? ' active' : '') + '">Non-metric MDS Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '<div class="nav-subheader subcategory-header" data-key="tda"><span>Topological Data Analysis</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="tda-content">';
			html += '<div class="nav-subheader" data-key="persistent-homology"><span>Persistent Homology</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="persistent-homology-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Persistent_Homology_Overview.html') + '" class="nav-item sub' + (current === 'Persistent_Homology_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Persistent_Homology.html') + '" class="nav-item sub' + (current === 'Persistent_Homology.html' ? ' active' : '') + '">Persistent Homology Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="mapper"><span>Mapper</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="mapper-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Mapper_Overview.html') + '" class="nav-item sub' + (current === 'Mapper_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/Mapper.html') + '" class="nav-item sub' + (current === 'Mapper.html' ? ' active' : '') + '">Mapper Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="supervised-dr"><span>Supervised Dimensionality Reduction</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="supervised-dr-content">';
			html += '<div class="nav-subheader subcategory-header" data-key="class-aware"><span>Class-Aware Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="class-aware-content">';
			html += '<div class="nav-subheader" data-key="lda-class-aware"><span>LDA (Class-Aware)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="lda-class-aware-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/LDA_ClassAware_Overview.html') + '" class="nav-item sub' + (current === 'LDA_ClassAware_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/LDA_ClassAware.html') + '" class="nav-item sub' + (current === 'LDA_ClassAware.html' ? ' active' : '') + '">LDA (Class-Aware) Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="cca-class-aware"><span>CCA (Class-Aware)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="cca-class-aware-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/CCA_ClassAware_Overview.html') + '" class="nav-item sub' + (current === 'CCA_ClassAware_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/CCA_ClassAware.html') + '" class="nav-item sub' + (current === 'CCA_ClassAware.html' ? ' active' : '') + '">CCA (Class-Aware) Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="spca-class-aware"><span>SPCA (Class-Aware)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="spca-class-aware-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SPCA_ClassAware_Overview.html') + '" class="nav-item sub' + (current === 'SPCA_ClassAware_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SPCA_ClassAware.html') + '" class="nav-item sub' + (current === 'SPCA_ClassAware.html' ? ' active' : '') + '">SPCA (Class-Aware) Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '<div class="nav-subheader subcategory-header" data-key="metric-learning"><span>Metric Learning</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup subcategory-group" id="metric-learning-content">';
			html += '<div class="nav-subheader" data-key="lmnn-metric-learning"><span>LMNN (Metric Learning)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="lmnn-metric-learning-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/LMNN_MetricLearning_Overview.html') + '" class="nav-item sub' + (current === 'LMNN_MetricLearning_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/LMNN_MetricLearning.html') + '" class="nav-item sub' + (current === 'LMNN_MetricLearning.html' ? ' active' : '') + '">LMNN (Metric Learning) Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="nca-metric-learning"><span>NCA (Metric Learning)</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="nca-metric-learning-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/NCA_MetricLearning_Overview.html') + '" class="nav-item sub' + (current === 'NCA_MetricLearning_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/NCA_MetricLearning.html') + '" class="nav-item sub' + (current === 'NCA_MetricLearning.html' ? ' active' : '') + '">NCA (Metric Learning) Implementation</a>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			html += '<div class="nav-subheader category-header" data-key="sparse"><span>Sparse Methods</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup category-group" id="sparse-content">';
			html += '<div class="nav-subheader" data-key="sparse-pca"><span>Sparse PCA</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="sparse-pca-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SparsePCA_Overview.html') + '" class="nav-item sub' + (current === 'SparsePCA_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SparsePCA.html') + '" class="nav-item sub' + (current === 'SparsePCA.html' ? ' active' : '') + '">Sparse PCA Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="sparse-autoencoders"><span>Sparse Autoencoders</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="sparse-autoencoders-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SparseAutoencoders_Overview.html') + '" class="nav-item sub' + (current === 'SparseAutoencoders_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SparseAutoencoders.html') + '" class="nav-item sub' + (current === 'SparseAutoencoders.html' ? ' active' : '') + '">Sparse Autoencoders Implementation</a>';
			html += '</div>';
			html += '<div class="nav-subheader" data-key="sparse-random-projections"><span>Sparse Random Projections</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subgroup" id="sparse-random-projections-content">';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SparseRandomProjections_Overview.html') + '" class="nav-item sub' + (current === 'SparseRandomProjections_Overview.html' ? ' active' : '') + '">Overview</a>';
			html += '<a href="' + makeRelativePath('Dimensionality_Reduction/SparseRandomProjections.html') + '" class="nav-item sub' + (current === 'SparseRandomProjections.html' ? ' active' : '') + '">Sparse Random Projections Implementation</a>';
			html += '</div>';
			html += '</div>';
			
			container.innerHTML = html;
			attachSidebarBehavior(container);
			return;
		}
		
		navConfig.sections.forEach(function(section) {
			const sectionKey = section.header.toLowerCase().replace(/\s+/g, '-');
			
			// For Dashboard, show links directly without category header
			if (section.header === 'Dashboard') {
				section.subsections.forEach(function(sub) {
					sub.links.forEach(function(link) {
						const file = getFileName(link.href);
						const active = file === current ? ' active' : '';
						const aria = file === current ? ' aria-current="page"' : '';
						html += '<a href="' + makeRelativePath('' + link.href + '') + '" class="nav-item' + active + '"' + aria + '>' + link.label + '</a>';
					});
				});
				return; // Skip the rest of the Dashboard section processing
			}
			
			// For Clustering Methods, skip the wrapper header and render categories directly
			if (section.header === 'Clustering Methods' && section.categories) {
				section.categories.forEach(function(category) {
					const catKey = category.title.toLowerCase().replace(/\s+/g, '-');
					html += '<div class="nav-subheader category-header" data-key="' + catKey + '"><span>' + category.title + '</span><span class="arrow">▼</span></div>';
					html += '<div class="nav-subgroup category-group" id="' + catKey + '-content">';
					
					// Check if category has subcategories (e.g., Partitioning) or direct subsections (e.g., Density Based)
					if (category.subcategories) {
						// Category has subcategories: Partitioning -> Centroid-Based/Model-Based
						category.subcategories.forEach(function(subcategory) {
							const subcatKey = subcategory.title.toLowerCase().replace(/\s+/g, '-');
							html += '<div class="nav-subheader nested subcategory-header" data-key="' + subcatKey + '"><span>' + subcategory.title + '</span><span class="arrow">▼</span></div>';
							html += '<div class="nav-subgroup nested subcategory-group" id="' + subcatKey + '-content">';
							
							subcategory.subsections.forEach(function(sub) {
								const subKey = sub.title.toLowerCase().replace(/\s+/g, '-');
								html += '<div class="nav-subheader nested" data-key="' + subKey + '"><span>' + sub.title + '</span><span class="arrow">▼</span></div>';
								html += '<div class="nav-subgroup nested" id="' + subKey + '-content">';
								sub.links.forEach(function(link) {
									const file = getFileName(link.href);
									const active = file === current ? ' active' : '';
									const aria = file === current ? ' aria-current="page"' : '';
									html += '<a href="' + makeRelativePath('' + link.href + '') + '" class="nav-item sub' + active + '"' + aria + '>' + link.label + '</a>';
								});
								html += '</div>';
							});
							
							html += '</div>';
						});
					} else if (category.subsections) {
						// Category has direct subsections: Density Based -> DBSCAN, etc.
						category.subsections.forEach(function(sub) {
							const subKey = sub.title.toLowerCase().replace(/\s+/g, '-');
							html += '<div class="nav-subheader nested" data-key="' + subKey + '"><span>' + sub.title + '</span><span class="arrow">▼</span></div>';
							html += '<div class="nav-subgroup nested" id="' + subKey + '-content">';
							sub.links.forEach(function(link) {
								const file = getFileName(link.href);
								const active = file === current ? ' active' : '';
								const aria = file === current ? ' aria-current="page"' : '';
								html += '<a href="' + makeRelativePath('' + link.href + '') + '" class="nav-item sub' + active + '"' + aria + '>' + link.label + '</a>';
							});
							html += '</div>';
						});
					}
					
					html += '</div>';
				});
				return; // Skip the rest of the Clustering Methods section processing
			}
			
			html += '<div class="nav-category">';
			html += '<div class="nav-category-header" data-key="' + sectionKey + '"><span>' + section.header + '</span><span class="arrow">▼</span></div>';
			html += '<div class="nav-subcategory" id="' + sectionKey + '-content">';
			
			// Check if section has categories (new structure) or subsections (old structure)
			if (section.categories) {
				// New nested structure: Categories -> Subcategories -> Algorithms
				section.categories.forEach(function(category) {
					const catKey = category.title.toLowerCase().replace(/\s+/g, '-');
					html += '<div class="nav-subheader category-header" data-key="' + catKey + '"><span>' + category.title + '</span><span class="arrow">▼</span></div>';
					html += '<div class="nav-subgroup category-group" id="' + catKey + '-content">';
					
					// Check if category has subcategories (e.g., Partitioning) or direct subsections (e.g., Density Based)
					if (category.subcategories) {
						// Category has subcategories: Partitioning -> Centroid-Based/Model-Based
						category.subcategories.forEach(function(subcategory) {
							const subcatKey = subcategory.title.toLowerCase().replace(/\s+/g, '-');
							html += '<div class="nav-subheader nested subcategory-header" data-key="' + subcatKey + '"><span>' + subcategory.title + '</span><span class="arrow">▼</span></div>';
							html += '<div class="nav-subgroup nested subcategory-group" id="' + subcatKey + '-content">';
							
							subcategory.subsections.forEach(function(sub) {
								const subKey = sub.title.toLowerCase().replace(/\s+/g, '-');
								html += '<div class="nav-subheader nested" data-key="' + subKey + '"><span>' + sub.title + '</span><span class="arrow">▼</span></div>';
								html += '<div class="nav-subgroup nested" id="' + subKey + '-content">';
								sub.links.forEach(function(link) {
									const file = getFileName(link.href);
									const active = file === current ? ' active' : '';
									const aria = file === current ? ' aria-current="page"' : '';
									html += '<a href="' + makeRelativePath('' + link.href + '') + '" class="nav-item sub' + active + '"' + aria + '>' + link.label + '</a>';
								});
								html += '</div>';
							});
							
							html += '</div>';
						});
					} else if (category.subsections) {
						// Category has direct subsections: Density Based -> DBSCAN, etc.
						category.subsections.forEach(function(sub) {
							const subKey = sub.title.toLowerCase().replace(/\s+/g, '-');
							html += '<div class="nav-subheader nested" data-key="' + subKey + '"><span>' + sub.title + '</span><span class="arrow">▼</span></div>';
							html += '<div class="nav-subgroup nested" id="' + subKey + '-content">';
							sub.links.forEach(function(link) {
								const file = getFileName(link.href);
								const active = file === current ? ' active' : '';
								const aria = file === current ? ' aria-current="page"' : '';
								html += '<a href="' + makeRelativePath('' + link.href + '') + '" class="nav-item sub' + active + '"' + aria + '>' + link.label + '</a>';
							});
							html += '</div>';
						});
					}
					
					html += '</div>';
				});
			} else if (section.subsections) {
				// Old structure: Direct subsections (for non-Dashboard sections)
				section.subsections.forEach(function(sub) {
					const subKey = sub.title.toLowerCase().replace(/\s+/g, '-');
					html += '<div class="nav-subheader" data-key="' + subKey + '"><span>' + sub.title + '</span><span class="arrow">▼</span></div>';
					html += '<div class="nav-subgroup" id="' + subKey + '-content">';
					sub.links.forEach(function(link) {
						const file = getFileName(link.href);
						const active = file === current ? ' active' : '';
						const aria = file === current ? ' aria-current="page"' : '';
						html += '<a href="' + makeRelativePath('' + link.href + '') + '" class="nav-item sub' + active + '"' + aria + '>' + link.label + '</a>';
					});
					html += '</div>';
				});
			}
			
			html += '</div>';
			html += '</div>';
		});
		container.innerHTML = html;
		attachSidebarBehavior(container);
	}

	function attachSidebarBehavior(root) {
		// Remove any existing handler to prevent duplicates
		if (root._sidebarClickHandler) {
			root.removeEventListener('click', root._sidebarClickHandler, true);
		}
		
		function toggle(el, contentId, storageKey) {
			const content = document.getElementById(contentId);
			if (!content) {
				console.warn('Content not found for:', contentId, 'Available IDs:', Array.from(document.querySelectorAll('[id$="-content"]')).map(e => e.id));
				return;
			}
			el.classList.toggle('collapsed');
			content.classList.toggle('collapsed');
			try { localStorage.setItem('sidebar-' + storageKey, el.classList.contains('collapsed') ? 'collapsed' : 'expanded'); } catch (e) {}
		}

		// Create handler function
		const clickHandler = function(ev) {
			// Don't handle if clicking on a link directly
			if (ev.target.tagName === 'A' || ev.target.closest('a')) {
				return;
			}
			
			// Find the closest header (closest() will find parent even if clicking on child span/arrow)
			let target = ev.target.closest('.nav-category-header, .nav-subheader');
			
			if (!target) {
				return;
			}
			
			// Stop propagation to prevent other handlers
			ev.stopPropagation();
			ev.preventDefault();
			
			// Handle category headers
			if (target.classList.contains('nav-category-header')) {
				const sectionKey = target.getAttribute('data-key');
				if (!sectionKey) return;
				const contentId = sectionKey + '-content';
				toggle(target, contentId, sectionKey);
				return;
			}
			
			// Handle subheaders (including nested algorithm-level ones)
			if (target.classList.contains('nav-subheader')) {
				const key = target.getAttribute('data-key');
				if (!key) {
					return;
				}
				const contentId = key + '-content';
				toggle(target, contentId, key);
				return;
			}
		};
		
		// Store handler reference and attach with capture phase
		root._sidebarClickHandler = clickHandler;
		root.addEventListener('click', clickHandler, true); // Use capture phase (true)

		// Check if this is the first visit (no sidebar state in localStorage)
		let isFirstVisit = true;
		try {
			// Check if any sidebar state exists in localStorage
			for (let i = 0; i < localStorage.length; i++) {
				const key = localStorage.key(i);
				if (key && key.startsWith('sidebar-')) {
					isFirstVisit = false;
					break;
				}
			}
		} catch (e) {
			// If localStorage is not available, treat as first visit
			isFirstVisit = true;
		}

		if (isFirstVisit) {
			// First visit: collapse all sections
			Array.prototype.forEach.call(root.querySelectorAll('.nav-category-header, .nav-subheader.category-header'), function(categoryHeader) {
				categoryHeader.classList.add('collapsed');
				const sectionKey = categoryHeader.getAttribute('data-key');
				const content = document.getElementById(sectionKey + '-content');
				if (content) content.classList.add('collapsed');
			});

			Array.prototype.forEach.call(root.querySelectorAll('.nav-subheader'), function(header) {
				header.classList.add('collapsed');
				const key = header.getAttribute('data-key');
				const content = document.getElementById(key + '-content');
				if (content) content.classList.add('collapsed');
			});
		} else {
			// Subsequent visits: restore state from localStorage (both collapsed and expanded)
			Array.prototype.forEach.call(root.querySelectorAll('.nav-category-header, .nav-subheader.category-header'), function(categoryHeader) {
				try {
					const sectionKey = categoryHeader.getAttribute('data-key');
					const state = localStorage.getItem('sidebar-' + sectionKey);
					const content = document.getElementById(sectionKey + '-content');
					if (state === 'collapsed') {
						categoryHeader.classList.add('collapsed');
						if (content) content.classList.add('collapsed');
					} else if (state === 'expanded') {
						categoryHeader.classList.remove('collapsed');
						if (content) content.classList.remove('collapsed');
					} else {
						// No state saved, default to collapsed
						categoryHeader.classList.add('collapsed');
						if (content) content.classList.add('collapsed');
					}
				} catch (e) {}
			});

			Array.prototype.forEach.call(root.querySelectorAll('.nav-subheader'), function(header) {
				try {
					const key = header.getAttribute('data-key');
					const state = localStorage.getItem('sidebar-' + key);
					const content = document.getElementById(key + '-content');
					if (state === 'collapsed') {
						header.classList.add('collapsed');
						if (content) content.classList.add('collapsed');
					} else if (state === 'expanded') {
						header.classList.remove('collapsed');
						if (content) content.classList.remove('collapsed');
					} else {
						// No state saved, default to collapsed
						header.classList.add('collapsed');
						if (content) content.classList.add('collapsed');
					}
				} catch (e) {}
			});
		}
	}

	function ensureLayout() {
		// If page hasn't defined the two-column structure, add it
		const hasSidebar = document.querySelector('.sidebar');
		const hasMain = document.querySelector('.main-content');
		if (!hasSidebar || !hasMain) {
			const body = document.body;
			const wrapperSidebar = document.createElement('div');
			wrapperSidebar.className = 'sidebar';
			const wrapperMain = document.createElement('div');
			wrapperMain.className = 'main-content';
			while (body.firstChild) {
				wrapperMain.appendChild(body.firstChild);
			}
			body.appendChild(wrapperSidebar);
			body.appendChild(wrapperMain);
		}
	}

	function init() {
		ensureLayout();
		const sidebarEl = document.querySelector('.sidebar');
		if (sidebarEl) {
			renderSidebar(sidebarEl);
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
