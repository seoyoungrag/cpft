
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
 *         &lt;element name="GetEDocStatesResult" type="{http://ws.baroservice.com/}ArrayOfEDocState" minOccurs="0"/&gt;
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
    "getEDocStatesResult"
})
@XmlRootElement(name = "GetEDocStatesResponse")
public class GetEDocStatesResponse {

    @XmlElement(name = "GetEDocStatesResult")
    protected ArrayOfEDocState getEDocStatesResult;

    /**
     * getEDocStatesResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfEDocState }
     *     
     */
    public ArrayOfEDocState getGetEDocStatesResult() {
        return getEDocStatesResult;
    }

    /**
     * getEDocStatesResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfEDocState }
     *     
     */
    public void setGetEDocStatesResult(ArrayOfEDocState value) {
        this.getEDocStatesResult = value;
    }

}
