
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetCorpStatesResult" type="{http://ws.baroservice.com/}ArrayOfCorpState" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getCorpStatesResult"
})
@XmlRootElement(name = "GetCorpStatesResponse")
public class GetCorpStatesResponse {

    @XmlElement(name = "GetCorpStatesResult")
    protected ArrayOfCorpState getCorpStatesResult;

    /**
     * getCorpStatesResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfCorpState }
     *     
     */
    public ArrayOfCorpState getGetCorpStatesResult() {
        return getCorpStatesResult;
    }

    /**
     * getCorpStatesResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfCorpState }
     *     
     */
    public void setGetCorpStatesResult(ArrayOfCorpState value) {
        this.getCorpStatesResult = value;
    }

}
