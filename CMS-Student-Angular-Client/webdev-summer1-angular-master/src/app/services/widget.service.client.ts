export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    console.log("Widget service client:"+topicId);
    return fetch('http://localhost:8080/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
